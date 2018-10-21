import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-css-practice',
  templateUrl: './css-practice.component.html',
  styleUrls: ['./css-practice.component.css']
})
export class CssPracticeComponent implements OnInit {

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
  constructor(){}

  ngOnInit() {
  }

}





