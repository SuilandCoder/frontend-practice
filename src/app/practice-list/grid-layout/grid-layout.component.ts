import { Component, OnInit, SimpleChanges, Output } from '@angular/core';
import {PageEvent, MatPaginatorIntl} from '@angular/material';
@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css']
})
export class GridLayoutComponent implements OnInit {

  datas=[
    {
      id:1,
      name:"line",
    },
    {
      id:2,
      name:"grid",
    },
    {
      id:3,
      name:"polygon",
    },{
      id:4,
      name:"line",
    },
    {
      id:5,
      name:"grid",
    },
    {
      id:6,
      name:"polygon",
    },{
      id:7,
      name:"line",
    },
    {
      id:8,
      name:"grid",
    },
    {
      id:9,
      name:"polygon",
    }
  ]

  length = 100;
  pageSize = 6;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @Output()
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
  }

  constructor(
    private matintl:MatPaginatorIntl
  ) { }

  ngOnInit() {
    console.log(this.pageEvent);
    this.matintl.changes.next(console.log(this.pageEvent));
  }

}
