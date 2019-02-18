import { MatSharedModule } from './common/mat-shared/index';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { CssPracticeComponent } from './css-practice/css-practice.component';
import { PracticeListComponent } from './practice-list/practice-list.component'; 
import { MatIconModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GithubStyleComponent } from './github-style/github-style.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { ExpandBarComponent } from './expand-bar/expand-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SidebarModule } from 'ng-sidebar';
import { SagaPluginComponent } from './saga-plugin/saga-plugin.component';
@NgModule({
  declarations: [
    AppComponent,
    CssPracticeComponent,
    PracticeListComponent,
    GithubStyleComponent,
    RxjsDemoComponent,
    ExpandBarComponent,
    SideBarComponent,
    SagaPluginComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatGridListModule,
    AppRoutingModule,
    MatSharedModule,
    BrowserAnimationsModule, 
    MatCardModule,
    MatSidenavModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
