import { Component, OnInit } from '@angular/core';
import { PlanService } from '../plan.service';
import { Food } from '../food';
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  foods:Food[];
  constructor(private planService: PlanService) { }
  deletefood(id:string):void{
    this.planService.deleteFood(id)
    .subscribe(()=>this.foods =this.foods=this.foods.filter(f=>f.id!==id));
  }
  getFood1(): void {
    this.planService.getFood()
    .subscribe(foods => this.foods = foods);
}
  ngOnInit() {
    this.getFood1();
  }

}
