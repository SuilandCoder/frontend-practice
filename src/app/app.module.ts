import { FileSizePipe } from './common/pipe/filesize.pipe';
import { NgModule } from '@angular/core';
import { MatSharedModule } from './common/mat-shared/index';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { PracticeListComponent } from './practice-list/practice-list.component';
import { MatIconModule, MatCardModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarModule } from 'ng-sidebar';
import { CssPracticeComponent } from './practice-list/css-practice/css-practice.component';
import { GithubStyleComponent } from './practice-list/github-style/github-style.component';
import { RxjsDemoComponent } from './practice-list/rxjs-demo/rxjs-demo.component';
import { ExpandBarComponent } from './practice-list/expand-bar/expand-bar.component';
import { SideBarComponent } from './practice-list/side-bar/side-bar.component';
import { SagaPluginComponent } from './practice-list/saga-plugin/saga-plugin.component';
import { SagaModule } from 'saga-test-sj';
import { GridLayoutComponent } from './practice-list/grid-layout/grid-layout.component';
import { CommonModule, PercentPipe } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DataPickComponent, InputDialog } from './practice-list/data-pick/data-pick.component';
import { MatMenuModule } from '@angular/material/menu';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { OlTdtComponent } from './practice-list/ol-tdt/ol-tdt.component';
import { ZoneTestComponent } from './practice-list/zone-test/zone-test.component';
import { SetGetComponent } from './practice-list/set-get/set-get.component';
import { SetGetChildComponent } from './practice-list/set-get/set-get-child/set-get-child.component';
import { OlControlComponent } from './practice-list/ol-control/ol-control.component';
import { UploadFileComponent, DialogTest } from './practice-list/upload-file/upload-file.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UploadDialogComponent } from './practice-list/upload-file/upload-dialog/upload-dialog.component';
import { NgxUploaderModule } from 'ngx-uploader';
import { NgStyleTestComponent } from './practice-list/ng-style-test/ng-style-test.component';
import { CommentTestComponent } from './practice-list/comment-test/comment-test.component';
import { FormsModule } from '@angular/forms';
import { ServiceTestComponent } from './practice-list/service-test/service-test.component';
import { ChildComponent } from './practice-list/service-test/child/child.component';
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
    OlControlComponent,
    UploadFileComponent,
    DialogTest,
    UploadDialogComponent,
    FileSizePipe,
    NgStyleTestComponent,
    CommentTestComponent,
    ServiceTestComponent,
    ChildComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    MatTableModule,
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
    MatProgressBarModule,
    NgxUploaderModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    InputDialog,
    DialogTest,
  ]
})
export class AppModule { }
