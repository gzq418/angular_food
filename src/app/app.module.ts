import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';
import { PlayDetailsComponent } from './play-details/play-details.component';
import { FoodComponent } from './food/food.component';
import { CommentComponent } from './comment/comment.component';
import { HomeComponent } from './home/home.component';
import { PlanComponent } from './plan/plan.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StduentComponent } from './stduent/stduent.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    PlayDetailsComponent,
    FoodComponent,
    CommentComponent,
    HomeComponent,
    PlanComponent,
    StduentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
