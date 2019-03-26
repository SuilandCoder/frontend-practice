import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expand-bar',
  templateUrl: './expand-bar.component.html',
  styleUrls: ['./expand-bar.component.css']
})
export class ExpandBarComponent implements OnInit {
  showFiller = false;
  LayersListHeight: number;
  leftBt = ">";
  rightBt = "<";
  @Input()
  leftOpened: boolean
  @Input()
  rightOpened: boolean
  constructor() {

  }

  ngOnInit() {
    this.LayersListHeight = window.innerHeight * 0.88;
    window.addEventListener('resize', () => {
      this.LayersListHeight = window.innerHeight * 0.88;
    })
  } 

}
