import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Observable } from 'rx';
import { getRepos, getUser } from '../../assets/js/helper'
import { reposTemplate,userTemplate } from '../../assets/js/templates'
import { container } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.scss']
})
export class RxjsDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const $input = $('.search');
    var i =0;
    $(_=> {
      
      //* 通过 input 的keyup 事件来创建流
      const observable = Observable.fromEvent($input,'keyup')
                                    .map(_=> $input.val().toString().trim()) //* 获取每次 keyup 时搜索框的值，筛选出合法值
                                    .filter(text=>!!text)
                                    .do(value=>console.log(value)); //* 利用 do()做一些不影响流的事情，比如这里打印input的值
      //* 开启监听
      // observable.subscribe();
    });


    //* 每次keyup 时都会根据此时input的value去异步获取数据。
    const observable_from_promise = Observable.fromEvent($input,'keyup')
                                              .map(_=>$input.val())
                                              .filter(text=>!!text)
                                              .do(value=>console.log(value))
                                              //* 调用 getRepos 方法将返回一个 Observable
                                              //* flatMap 则将所有 Observable 合并，转为一个 Observable
                                              .flatMap(getRepos);
    
    //* 监听input输入，异步获取数据  
    // observable_from_promise.subscribe(_=>{
    //   i++;
    //   console.log(i);
    // });

    /** 
     * * 缺点：
     * *    1 不断打字时会连续不断触发异步请求，占用资源影响体验
     * *    2 如果相邻的keyup事件触发时 input 的值一样，也就是说按下了不改变 value 的按键（比如方向键），会重复触发一样的异步事件
     * *    3 发出多个异步事件之后，每个事件所耗费的时间不一定相同。如果前一个异步所用时间较后一个长，那么当它最终返回结果时，有可能把后面的异步率先返回的结果覆盖
    */


    //* 优化1：当用户在连续打字时，我们不应该继续进行之后的事件处理，而如果打字中断，或者说两次keyup事件的时间间隔足够长时，才应该发送异步请求
    //*       debounce() 在一段时间内事件被不断触发时，不会被之后的操作所处理；只有超过指定时间间隔的事件才会留下来：
    //* 优化2：对于任意相邻的事件，如果它们的返回值一样，则只要取一个
    //*       distinctUntilChanged()
    //* 优化3：发送多个请求时，不关心之前请求的处理，只处理最后一次的请求
    //*       flatMapLatest() 当 Observable 触发某个事件，返回新的 Observable 时，将取消之前触发的事件，并且不再关心返回结果的处理
    const observable_better = Observable.fromEvent($input,'keyup')
                                          .debounce(400)
                                          .map(_=>$input.val())
                                          .filter(text=>!!text)
                                          .distinctUntilChanged()
                                          .do(value=>console.log(value))
                                          .flatMapLatest(getRepos);

    // observable_debounce.subscribe();


    //* 创建流后对其监听
    // observable_better.subscribe(data=>{
    //   //*在 showNewResults方法中使用返回值渲染 DOM
    //   console.log(data);
    //   this.showNewResults(data); 
    // },
    // (err)=>{
    //   console.log(err);
    // },()=>{
    //   console.log('completed');
    // });

    //* 在 do 的回调内做什么都可以，它不会影响到流内的事件；除此以外，还可以拿到流中各个事件的返回值
    //* 使用 do 来完成 DOM的渲染
    const $container = $('.content_container');
    
    const observable_do = Observable.fromEvent($input,'keyup')
                                    .debounce(400)
                                    .map(_=>$input.val())
                                    .filter(text=>!!text)
                                    .distinctUntilChanged()
                                    .do(value=>console.log(value))
                                    .flatMapLatest(getRepos)
                                    //* 把之前的搜索结果清空
                                    .do(results =>{
                                      console.log("请求数据完成！");
                                      console.log("results:"+results);
                                      $container.html('');
                                      return results=null;
                                    })
                                    //* 利用 Rx.Observable.from 将异步的结果转化为Observable,并通过 flatMap 合并到原有的流中。
                                    //* 此时流中的每个元素是 results 中的每个item 
                                    .flatMap(({items})=>Observable.from(items))
                                    //* 将各 item 转化为 jQuery 对象
                                    .map(repos=>$(reposTemplate(repos)))
                                    //* 最后把每个 jQuery 对象依次加到容器里
                                    .do($repos => $container.append($repos));


    observable_do.subscribe(_=>{
      console.log('success');
    },
    err=>{
      console.log(err);
    },
    ()=>{
      console.log('completed');
    })


    //! 以下hover 事件无效！！！！！！！！
    //* 创建基于hover的事件流
    const initialUserInfoStream = ()=>{
      const $avator=$('.user_header');
      //* 通过头像 $avator 的 hover 事件来创建流
      const avatorMouseover=Observable.fromEvent($avator,'mouseover')
                                      .do(_=>{
                                        console.log("hover");
                                      })
                                      .debounce(500)
                                      //* 只有当满足了下列条件的流才会继续执行，否则将中断
                                      .takeWhile(({target})=>{
                                        //* 异步获取的用户信息被新建到 DOM 里，该DOM最外层是 infos_container
                                        //* 因此，如果已经有了 infos_container, 则可以认为我们已经异步获取过数据了，此时 takeWhile 将返回 false,
                                        const $infosWrapper = $(target).parent().find('.user_infos_wrapper');
                                        return $infosWrapper.find('.infos_container').length===0;
                                      })
                                      .map(({target})=>{
                                        const $infosWrapper = $(target).parent().find('.user_infos_wrapper');
                                        return {
                                          container:$infosWrapper,
                                          url:$(target).attr('data-api')
                                        }
                                      }).filter(data=>!!data.url)
                                      //* getUser 来异步获取用户数据
                                      .flatMapLatest(getUser)
                                      .do(({data,container})=>{
                                        //* 将用户信息组件成为 DOM 元素， 并插入到页面中。在这之后，该用户对应的 DOM 里就会拥有 infos_container 这个 div,
                                        //* 所以 takeWhile 会返回 false。也就是说，之后在 hover 上去，流也不会被触发了
                                        this.showUserInfo(container,data);
                                      });
      avatorMouseover.subscribe((result)=>{
        console.log('fetch user info succeed');
      },(err)=>{
        console.log(err);
      },()=>{
        console.log('completed');
      })
    } 
  } 

  showNewResults = (data)=>{
      const repos = data.items.map((item,i)=>{
        return reposTemplate(item);
    }).join('');
    console.log(repos);
    $('.content_container').html(repos); 
  }

   showUserInfo = ($dom, data) => {
    $dom.html(userTemplate(data));
  };

}
