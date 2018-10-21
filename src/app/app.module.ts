import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { CssPracticeComponent } from './css-practice/css-practice.component';
import { PracticeListComponent } from './practice-list/practice-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CssPracticeComponent,
    PracticeListComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
