import { Component, OnInit } from '@angular/core';
import { PlayService } from '../play.service';
import { Food } from '../food';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent implements OnInit {
  food:Food[];
  food1:Food;
  constructor(private playService: PlayService) { }
add(no:string,name: string,place: string,describe: string,make: string): void {
  if (!name||!no) { return; }
  this.playService.addFood({no,name,place,describe,make} as Food)
    .subscribe();
    
}


  ngOnInit() {
    
    
  }
 


}
