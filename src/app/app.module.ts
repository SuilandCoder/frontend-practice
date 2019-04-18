import { NgModule } from '@angular/core';
import { MatSharedModule } from './common/mat-shared/index';
import { BrowserModule } from '@angular/platform-browser'; 

import { AppComponent } from './app.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module'; 
import { PracticeListComponent } from './practice-list/practice-list.component'; 
import { MatIconModule, MatCardModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { SidebarModule } from 'ng-sidebar'; 
import { CssPracticeComponent } from './practice-list/css-practice/css-practice.component';
import { GithubStyleComponent } from './practice-list/github-style/github-style.component';
import { RxjsDemoComponent } from './practice-list/rxjs-demo/rxjs-demo.component';
import { ExpandBarComponent } from './practice-list/expand-bar/expand-bar.component';
import { SideBarComponent } from './practice-list/side-bar/side-bar.component';
import { SagaPluginComponent } from './practice-list/saga-plugin/saga-plugin.component';
import { SagaModule } from 'saga-test-sj';
import { GridLayoutComponent } from './practice-list/grid-layout/grid-layout.component';

import {MatPaginatorModule} from '@angular/material/paginator';
import { DataPickComponent, InputDialog } from './practice-list/data-pick/data-pick.component';
import {MatMenuModule} from '@angular/material/menu';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { OlTdtComponent } from './practice-list/ol-tdt/ol-tdt.component';
import { ZoneTestComponent } from './practice-list/zone-test/zone-test.component';
import { SetGetComponent } from './practice-list/set-get/set-get.component';
import { SetGetChildComponent } from './practice-list/set-get/set-get-child/set-get-child.component';
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
    GridLayoutComponent,
    DataPickComponent,
    InputDialog,
    OlTdtComponent,
    ZoneTestComponent,
    SetGetComponent,
    SetGetChildComponent,
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
    SagaModule,
    MatDialogModule,
    MatMenuModule,
    MatPaginatorModule,
    NgZorroAntdModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    InputDialog
  ]
})
export class AppModule { }
