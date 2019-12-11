import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from './food';
import { Observable} from 'rxjs';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  private playUrl = 'http://localhost:2403/eat';
  constructor(private httpClient: HttpClient) { }


  addFood(food:Food): Observable<Food> {
    return this.httpClient.post<Food>(this.playUrl, food);
  }
  


}
