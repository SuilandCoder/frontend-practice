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
      name:"",
      route:""
    },
    {
      name:"",
      route:""
    },
    {
      name:"",
      route:""
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
