import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './count-details/count-details.component';
import { TodayWidgetComponent } from './today-widget/today-widget.component';
import { ActiveWidgetComponent } from './active-widget/active-widget.component';
import { DischargedWidgetComponent } from './discharged-widget/discharged-widget.component';
import { TotalWidgetComponent } from './total-widget/total-widget.component';
import { GrpahWidgetComponent } from './grpah-widget/grpah-widget.component';
import { NewsFeedWidgetComponent } from './news-feed-widget/news-feed-widget.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    TodayWidgetComponent,
    ActiveWidgetComponent,
    DischargedWidgetComponent,
    TotalWidgetComponent,
    GrpahWidgetComponent,
    NewsFeedWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
