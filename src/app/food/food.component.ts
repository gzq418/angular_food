import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../food';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  foods:Food[];
  constructor(private foodService: FoodService) { }
  getFood1(): void {
    this.foodService.getFood()
    .subscribe(foods => this.foods = foods);
}
  ngOnInit() {
    this.getFood1();
  }

}
