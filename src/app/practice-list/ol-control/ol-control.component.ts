import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Attribution from 'ol/control/Attribution';

@Component({
  selector: 'app-ol-control',
  templateUrl: './ol-control.component.html',
  styleUrls: ['./ol-control.component.css']
})
export class OlControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var attribution = new Attribution("sdgasdg");//这是版权控件

    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM({
            attributions:"asdgasdgasdgasdg"
          })
        })
      ],
      controls: [attribution],
      view: new View({
        center: [0, 0],
        zoom: 0
      })
    });

  }

}
