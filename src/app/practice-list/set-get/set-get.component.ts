import { SetGetChildComponent } from './set-get-child/set-get-child.component';
import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-set-get',
  templateUrl: './set-get.component.html',
  styleUrls: ['./set-get.component.css']
})
export class SetGetComponent implements OnInit {

  contact = {
    name:"songjie",
    age:"26",
  }

  @ViewChild(SetGetChildComponent) setgetChild:SetGetChildComponent;

  constructor() { }

  ngOnInit() {
  }

  changeName(){
    this.setgetChild.changeName("songjie");
  }

}
