import { Component, OnInit } from '@angular/core';
import { getWidth } from 'ol/extent.js';
import { get as getProjection } from 'ol/proj.js';
declare var ol: any;
import proj4 from 'proj4'

@Component({
  selector: 'app-ol-tdt',
  templateUrl: './ol-tdt.component.html',
  styleUrls: ['./ol-tdt.component.css']
})
export class OlTdtComponent implements OnInit {
  private mapObj;
  private layers: Array<any> = [];
  webKey = 'b40562686efa2ffbe579e05331f07e86';

  wmtsUrl_1 = 'http://t{0-7}.tianditu.gov.cn/vec_c/wmts?tk='; //矢量底图
  wmtsUrl_2 = 'http://t{0-7}.tianditu.gov.cn/cva_c/wmts?tk='; //矢量注记

  wmtsUrl_3 = 'http://t{0-7}.tianditu.gov.cn/img_c/wmts?tk='; //影像底图
  wmtsUrl_4 = 'http://t{0-7}.tianditu.gov.cn/cia_c/wmts?tk='; //影像注记

  wmtsUrl_5 = 'http://t{0-7}.tianditu.gov.cn/ter_w/wmts?tk='; //地形底图
  wmtsUrl_6 = 'http://t{0-7}.tianditu.gov.cn/cta_w/wmts?tk='; //地形注记

  wmtsUrl_7 = 'http://t{0-7}.tianditu.gov.cn/ibo_w/wmts?tk='; //境界（省级以上）
  wmtsUrl_8 = 'http://t{0-7}.tianditu.gov.cn/eva_w/wmts?tk='; //矢量英文注记
  wmtsUrl_9 = 'http://t{0-7}.tianditu.gov.cn/eia_w/wmts?tk='; //影像英文注记

  gsurl = "http://172.21.213.194:8080/geoserver/datacontainer/wfs"

  projection;
  projectionExtent;
  matrixIds;
  resolutions;
  size;



  test_layers = [];

  constructor() { }

  
  ngOnInit() {

    this.projection = getProjection('EPSG:4326');
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
        // preload: Infinity,
        source: new ol.source.WMTS({
          url: this.wmtsUrl_1 + this.webKey,
          layer: 'vec',
          matrixSet: 'c',
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
          url: this.wmtsUrl_2 + this.webKey,
          layer: 'cva',
          matrixSet: 'c',
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
        source: new ol.source.TileWMS({
          url: this.gsurl,
          params: {
            'LAYERS': "5cac4d54b3cd770cbc3da894_49b9e39e-15c5-4ef2-9b05-8d3676f675e2",
            'TILED': false
          },
          serverType: 'geoserver'    //服务器类型
        })
      }),
      new ol.layer.Tile({
        source: new ol.source.TileWMS({
          url: this.gsurl,
          params: {
            'LAYERS': "5cac507db3cd770cbc3da89a_test_tin_Tin1",
            'TILED': false
          },
          serverType: 'geoserver'    //服务器类型
        })
      })
    ]

    this.mapObj = new ol.Map({
      target: 'map',
      view: new ol.View({
        center: [120, 30],
        projection: 'EPSG:4326',
        zoom: 3
      })
    });

    this.mapObj.addLayer(this.test_layers[0]);
    this.mapObj.addLayer(this.test_layers[1]);
  }

 

}
