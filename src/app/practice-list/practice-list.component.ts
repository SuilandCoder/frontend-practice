import { Component, OnInit } from '@angular/core';

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
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
