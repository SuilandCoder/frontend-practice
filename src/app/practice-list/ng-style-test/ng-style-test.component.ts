import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-test',
  templateUrl: './ng-style-test.component.html',
  styleUrls: ['./ng-style-test.component.css']
})
export class NgStyleTestComponent implements OnInit {

  nameList = ["1", "2", "3"]

  constructor() { }

  ngOnInit() {
  }

  setSrc() {
    return "assets/common/fire.jpeg";
  }
  setStyle() {
    return {
      'width': '50px',
      'height': '50px'
    }
  }
  


}
