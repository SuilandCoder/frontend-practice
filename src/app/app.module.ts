import { MatSharedModule } from './common/mat-shared/index';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { CssPracticeComponent } from './css-practice/css-practice.component';
import { PracticeListComponent } from './practice-list/practice-list.component'; 
import { MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    CssPracticeComponent,
    PracticeListComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatGridListModule,
    AppRoutingModule,
    MatSharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
