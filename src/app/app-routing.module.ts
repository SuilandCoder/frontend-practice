import { DataPickComponent } from './practice-list/data-pick/data-pick.component';
import { NgModule } from '@angular/core';

import { PracticeListComponent } from './practice-list/practice-list.component';  
import {RouterModule, Routes} from '@angular/router';
import { CssPracticeComponent } from './practice-list/css-practice/css-practice.component';
import { GithubStyleComponent } from './practice-list/github-style/github-style.component';
import { RxjsDemoComponent } from './practice-list/rxjs-demo/rxjs-demo.component';
import { ExpandBarComponent } from './practice-list/expand-bar/expand-bar.component';
import { SideBarComponent } from './practice-list/side-bar/side-bar.component';
import { SagaPluginComponent } from './practice-list/saga-plugin/saga-plugin.component';
import { GridLayoutComponent } from './practice-list/grid-layout/grid-layout.component';
import { OlTdtComponent } from './practice-list/ol-tdt/ol-tdt.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'practice-list',
    pathMatch:'full'
  },
  {
    path:'practice-list',
    component:PracticeListComponent
  },
  {
    path:'css-practice',
    component: CssPracticeComponent
  },{
    path:'github-style',
    component: GithubStyleComponent
  },{
    path:'rxjs-demo',
    component: RxjsDemoComponent
  },{
    path:'expand-bar',
    component:ExpandBarComponent
  },{
    path:'side-bar',
    component:SideBarComponent
  },{
    path:'saga-plugin',
    component:SagaPluginComponent
  },{
    path:'grid-layout',
    component:GridLayoutComponent
  },{
    path:'data-pick',
    component:DataPickComponent
  },{
    path:'ol-tdt',
    component:OlTdtComponent
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
