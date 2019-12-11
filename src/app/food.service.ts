import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from './food';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foodUrl = 'http://localhost:2403/eat';
  
  constructor(private httpClient: HttpClient) { }
  getFood(): Observable<Food[]> {
    return this.httpClient.get<Food[]>(this.foodUrl);
  }
 
  

}
