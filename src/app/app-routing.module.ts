import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayDetailsComponent } from './play-details/play-details.component';
import { FoodComponent } from './food/food.component';
import { CommentComponent } from './comment/comment.component';
import { PlanComponent } from './plan/plan.component';
import { PlayComponent } from './play/play.component';
import { HomeComponent } from './home/home.component';
import { StudentService } from './student.service';
import { Student1Service } from './student1.service';
import { StduentComponent } from './stduent/stduent.component';


const routes: Routes = [
  {path:'play',component:PlayComponent},
  {path:'food',component:FoodComponent},
  {path:'comment',component:CommentComponent},
  {path:'plan',component:PlanComponent},
  {path:'home',component:HomeComponent},
  {path:'playdetails',component:PlayDetailsComponent},
  {path:'student',component:StduentComponent},
 
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
