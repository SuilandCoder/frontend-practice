import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-data-pick',
  templateUrl: './data-pick.component.html',
  styleUrls: ['./data-pick.component.css']
})
export class DataPickComponent implements OnInit {  

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  showDialog():void{
    const dialogRef = this.dialog.open(InputDialog,{
      width:'500px'
    })
  }


}

@Component({
  selector:'input-dialog',
  templateUrl:'input-dialog.html',
  styleUrls: ['./data-pick.component.css'] 
})
export class InputDialog{
  datas=[
    {name:"songjie"},
    {name:"songjie"},
    {name:"songjie"},
    {name:"songjie"},
    {name:"songjie"},
    {name:"songjie"},
    {name:"songjie"}
  ]

  show_search:boolean = false;
  constructor(
    public dialogRef: MatDialogRef<InputDialog>,
  ){

  }

  ngOnInit(): void {
  }

  addData(){
    this.datas.push({name:"zrm"})
  }
  fromLocal(){
    this.show_search = false;
  }
  fromLayers(){
    this.show_search = false;
  }
  fromUser(){
    this.show_search = false;
  }

  fromDataContainer(){
    this.show_search = true;
  }

  search(){
    console.log("search");
  }
}