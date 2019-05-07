import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/common/service/shared.service';

@Component({
  selector: 'app-service-test',
  templateUrl: './service-test.component.html',
  styleUrls: ['./service-test.component.css'], 
  providers:[SharedService]
})
export class ServiceTestComponent implements OnInit {

  list:string[]=[];
  constructor(
    private _sharedService:SharedService
  ) { }

  ngOnInit() {
    this.list = this._sharedService.list;
  }

}
