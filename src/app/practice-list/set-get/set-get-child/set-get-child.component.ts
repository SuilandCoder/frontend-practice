import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'set-get-child',
  templateUrl: './set-get-child.component.html',
  styleUrls: ['./set-get-child.component.css']
})
export class SetGetChildComponent implements OnInit {

  _contact:object = {};

  @Input()
  set contactObj(contact:object){
    if(contact["name"]=="songjie"){
      this._contact["name"] = "zrm";
    }
  }

  get contactObj(){
    return this._contact;
  }

  constructor() { }

  ngOnInit() {
  }

  changeName(name){
    this._contact["name"] = name;
  }
}
