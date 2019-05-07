import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

class Article{
  id:string;
  userName:string;
  title:string;
  time:string;
  content:string; 
  comments:Array<string>;
  commentList:Array<Comment>;
}

class Comment{
  id:string;
  commenter:string;
  commentee:string;
  content:string;
  time:string;
  hostName:string;
  comments:Array<string>;
  commentList:Array<Comment>;
}

@Component({
  selector: 'app-comment-test',
  templateUrl: './comment-test.component.html',
  styleUrls: ['./comment-test.component.css']
})
export class CommentTestComponent implements OnInit {

  userName:string = "songjie";
  articles:Array<Article> = [
    {
      id:'1',
      userName:"songjie",
      time:"2019 4 25",
      title:"this is a title",
      content:"this is the content of a article",
      comments:["11","22","33"],
      commentList:[]
    },
    {
      id:'2',
      userName:"zbc",
      time:"2019 4 25",
      title:"this is a title",
      content:"this is the content of a article",
      comments:["11","33"],
      commentList:[]
    },
  ]

  article = this.articles[0];

  comments:Array<Comment> = [
    {
      id:"11",
      commenter:"lyc",
      commentee:"songjie",
      content:"this is a comment from lyc",
      time:'2019 04 25',
      hostName:"songjie",
      comments:["22","33"],
      commentList:[]
    },
    {
      id:"22",
      commenter:"zbc",
      commentee:"lyc",
      content:"this is a comment from zbc",
      time:'2019 04 25',
      hostName:"songjie",
      comments:[],
      commentList:[]
    },
    {
      id:"33",
      commenter:"songjie",
      commentee:"lyc",
      content:"this is a comment from songjie",
      time:'2019 04 25',
      hostName:"songjie",
      comments:[],
      commentList:[]
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  newComments(articleHost,commentee){
    let comment = new Comment();
    let date = new Date();
    let id = date.getMilliseconds().toString();
    comment.id = id;
    comment.commentee = commentee;
    comment.commenter = this.userName;
    comment.content = "asdgasdgawegasg";
    comment.hostName = articleHost;
    comment.time = date.toDateString();
    comment.comments = new Array<string>();
    comment.commentList = new Array<Comment>();
    this.comments.push(comment);
    return comment;
  }

  addCommentToArticle(article,commentee){
    let newComment = this.newComments(article.userName,commentee);
    article.comments.push(newComment.id);
    article.commentList.push(newComment);
    this.article = article;
  }

  addCommentToComment(comment,commentee){
    let newComment = this.newComments(comment.hostName,commentee);
    comment.comments.push(newComment.id);
    comment.commentList.push(newComment);
    let index = _.findIndex(this.comments,["id",newComment.id]);
    this.comments[index] = comment;
  }

  getArticleComment(article){
    let showComments = article.comments.map(item=>{
      let index = _.findIndex(this.comments,["id",item]);
      return this.comments[index];
    })
    article.commentList = showComments;
    this.article = article;
  }

  // getComComment(comment){
  //   let showComments = comment.comments.map(item=>{
  //     let index = _.findIndex(this.comments,["id",item]);
  //     return this.comments[index];
  //   })
  //   comment.commentList = showComments;
  //   let index = _.findIndex(this.comments,["id",comment.id]);
  //   this.comments[index] = comment; 
  // }

}
