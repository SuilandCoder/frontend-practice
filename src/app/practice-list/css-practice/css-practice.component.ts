import { Component } from '@angular/core';

@Component({
  selector: 'app-css-practice',
  templateUrl: './css-practice.component.html',
  styleUrls: ['./css-practice.component.css']
})
export class CssPracticeComponent {

  weights = [
    {
      name: "!important",
      weight: "Infinity"
    },
    {
      name: "行间样式",
      weight: "1000"
    }, {
      name: "id",
      weight: "100"
    }, {
      name: "class | 属性 | 伪类",
      weight: "10"
    }, {
      name: "标签 | 伪元素",
      weight: "1"
    }, {
      name: "通配符",
      weight: "0"
    }
  ];

  inline_block_selectors = [
    {
      type: "行级选择器",
      feature: "内容决定元素所占位置，不可以通过CSS改变宽高",
      tags:"span, strong, em, a, del",
      attr:"inline",
    },{
      type: "块级选择器",
      feature: "独占一行，可以通过CSS改变宽高",
      tags:"div, p, ul, ol, li, form, address",
      attr:"block",
    },{
      type: "行块级选择器",
      feature: "内容决定大小，可以改变宽高",
      tags:"img",
      attr:"inline-block",
    }
  ]

  margins_top = [
    {
      value:"m-0",
      viewValue:"margin-top:0px"
    },
    {
      value:"mt-50",
      viewValue: "margin-top:50px"
    },{
      value:"mt-100",
      viewValue:'margin-top:100px'
    }
  ]

  margins_bottom=[
    {
      value:"m-0",
      viewValue:"margin-bottom:0px"
    },{
      value:"mb-50",
      viewValue: "margin-bottom:50px"
    },{
      value:"mb-100",
      viewValue: "margin-bottom:100px"
    }
  ]

  bfc_list = [
    {
      value:'pos-ab',
      viewValue:'position:absolute',
    },{
      value:'disp-in-b',
      viewValue:'display:inline-bolck',
    },
    {
      value:'float-l',
      viewValue:'float:left',
    },
    {
      value:'float-r',
      viewValue:'float:right',
    },{
      value:'overflow-h',
      viewValue:'overflow:hidden'
    },{
      value:'',
      viewValue:'none',
    }
  ]

  child_mt:any;
  parent_mt:any;

  displayedColumns: string[] = ["selector", "weights"];
  dis_col_ibs: string[] = ["type","feature","tags","attr"];

  show_rings = false;

  constructor() { }

  ngOnInit() {
  }

}





