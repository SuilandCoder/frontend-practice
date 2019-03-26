import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {defaults as defaultControls} from 'ol/control.js';
import {getWidth, getTopLeft} from 'ol/extent.js';
import TileLayer from 'ol/layer/Tile.js';
import {get as getProjection} from 'ol/proj.js';
import OSM from 'ol/source/OSM.js';
import WMTS from 'ol/source/WMTS.js';
import WMTSTileGrid from 'ol/tilegrid/WMTS.js';
declare var ol: any;

@Component({
  selector: 'app-ol-tdt',
  templateUrl: './ol-tdt.component.html',
  styleUrls: ['./ol-tdt.component.css']
})
export class OlTdtComponent implements OnInit {
  private mapObj;
  private layers: Array<any> = [];
  webKey = 'b40562686efa2ffbe579e05331f07e86';

  wmtsUrl_1 = 'http://t{0-7}.tianditu.gov.cn/vec_w/wmts?tk='; //矢量底图
  wmtsUrl_2 = 'http://t{0-7}.tianditu.gov.cn/cva_w/wmts?tk='; //矢量注记

  wmtsUrl_3 = 'http://t{0-7}.tianditu.gov.cn/img_w/wmts?tk='; //影像底图
  wmtsUrl_4 = 'http://t{0-7}.tianditu.gov.cn/cia_w/wmts?tk='; //影像注记

  wmtsUrl_5 = 'http://t{0-7}.tianditu.gov.cn/ter_w/wmts?tk='; //地形底图
  wmtsUrl_6 = 'http://t{0-7}.tianditu.gov.cn/cta_w/wmts?tk='; //地形注记

  wmtsUrl_7 = 'http://t{0-7}.tianditu.gov.cn/ibo_w/wmts?tk='; //境界（省级以上）
  wmtsUrl_8 = 'http://t{0-7}.tianditu.gov.cn/eva_w/wmts?tk='; //矢量英文注记
  wmtsUrl_9 = 'http://t{0-7}.tianditu.gov.cn/eia_w/wmts?tk='; //影像英文注记

  projection;
  projectionExtent;
  matrixIds;
  resolutions;
  size;



  test_layers = [];

  // other_test_layers = [
  //   new ol.layer.Tile({
  //     title: "天地图卫星影像",
  //     source: new ol.source.XYZ({
  //         url: 'http://t0.tianditu.gov.cn/vec_c/wmts?tk=b40562686efa2ffbe579e05331f07e86&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={x}&TILECOL={y}'
  //     })
  // })
  // ];

  constructor() { }

  ngOnInit() {

    this.projection = getProjection('EPSG:3857');
    this.projectionExtent = this.projection.getExtent();
    this.matrixIds = new Array(18);
    this.resolutions = new Array(18);
    this.size = getWidth(this.projectionExtent) / 256;

    for (var z = 1; z < 19; ++z) {
      // generate resolutions and matrixIds arrays for this WMTS
      this.resolutions[z] = this.size / Math.pow(2, z);
      this.matrixIds[z] = z;
    }

    this.test_layers = [
      new ol.layer.Tile({
        preload: Infinity,
        source: new ol.source.WMTS({
          attributions: 'Tiles © <a href="http://www.tianditu.com/service/info.html?sid=5292&type=info">天地图</a>'
          url: this.wmtsUrl_3 + this.webKey,
          layer: 'img',
          matrixSet: 'w',
          format: 'tiles',
          style: 'default',
          projection: this.projection,
          tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(this.projectionExtent),
                resolutions: this.resolutions,
                matrixIds: this.matrixIds
              }),
          wrapX: true
        })
      }),
      new ol.layer.Tile({
        // opacity: 0.7,
        source: new ol.source.WMTS({
          attributions: 'Tiles © <a href="http://www.tianditu.com/service/info.html?sid=5292&type=info">天地图</a>'
          url: this.wmtsUrl_4 + this.webKey,
          layer: 'cia',
          matrixSet: 'w',
          format: 'tiles',
          style: 'default',
          projection: this.projection,
          tileGrid: new ol.tilegrid.WMTS({
            origin: getTopLeft(this.projectionExtent),
            resolutions: this.resolutions,
            matrixIds: this.matrixIds
          }),
          wrapX: true
        })
      })
    ]

    this.mapObj = new ol.Map({
      target: 'map',
      layers: this.layers,
      view: new ol.View({
        center: [-11158582, 4813697],
        zoom: 5
      })
    });
    // this.mapObj.addLayer(this.test_layers[1]);
    this.mapObj.addLayer(this.test_layers[0]);
    this.mapObj.addLayer(this.test_layers[1]);
    
    // this.mapObj.addLayer(this.other_test_layers[0]);
  }

}
