import { Component, OnInit } from '@angular/core';
import { SharedService } from '../common/service/shared.service';
@Component({
  selector: 'app-practice-list',
  templateUrl: './practice-list.component.html',
  styleUrls: ['./practice-list.component.css']
})
export class PracticeListComponent implements OnInit {
  practice = [
    {
      name:"css",
      route:"css-practice"
    },
    {
      name:"GitHub Style",
      route:"github-style"
    },
    {
      name:"RxJs Demo",
      route:"rxjs-demo"
    },
    {
      name:"Expand Bar",
      route:"expand-bar"
    },{
      name:"Side Bar",
      route:"side-bar"
    },{
      name:"saga plugin",
      route:"saga-plugin"
    },{
      name:"grid layout",
      route:"grid-layout"
    },{
      name:"data pick",
      route:"data-pick"
    },{
      name:"ol 天地图",
      route:"ol-tdt"
    },{
      name:"Zone.js 测试",
      route:"zone-test"
    },{
      name:"set-get 测试",
      route:"set-get"
    },{
      name:"ol-control 测试",
      route:'ol-control'
    },{
      name:"file-upload 对话框",
      route:'file-upload'
    },{
      name:"ngStyle-test",
      route:'ngStyle-test'
    },{
      name:'comment-test',
      route:'comment-test'
    },{
      name:'service-test',
      route:'service-test'
    }
  ]
  list:string[]=[];
  constructor(
    // private _sharedService:SharedService
  ) { 
    // this.list = this._sharedService.list;
  }

  ngOnInit() {

  }

}
