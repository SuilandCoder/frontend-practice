import { PracticeListComponent } from './practice-list/practice-list.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssPracticeComponent } from './css-practice/css-practice.component';
import {RouterModule, Routes} from '@angular/router';
import { GithubStyleComponent } from './github-style/github-style.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { ExpandBarComponent } from './expand-bar/expand-bar.component';

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
