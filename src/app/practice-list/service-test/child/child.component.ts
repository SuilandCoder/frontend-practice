import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/common/service/shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  inputText:string = 'Testing data';
  constructor(
    private _sharedService:SharedService
  ) { }

  ngOnInit() {
  }

  add(){
    this._sharedService.append(this.inputText);
    this.inputText = '';
  }

}
