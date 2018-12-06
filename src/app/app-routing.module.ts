import { PracticeListComponent } from './practice-list/practice-list.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssPracticeComponent } from './css-practice/css-practice.component';
import {RouterModule, Routes} from '@angular/router';
import { GithubStyleComponent } from './github-style/github-style.component';

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
