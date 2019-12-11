import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Student1Service } from '../student1.service';

@Component({
  selector: 'app-stduent',
  templateUrl: './stduent.component.html',
  styleUrls: ['./stduent.component.css']
})
export class StduentComponent implements OnInit {

  stduent:Student[];
  student1:Student;
  constructor(private studentservice1: Student1Service) { }
add(no:string,name: string,major: string,year: string,time: string,college:string,sex:string): void {
  if (!name||!no) { return; }
  this.studentservice1.addStudent({no,name,major,year,time,college,sex} as Student)
    .subscribe();
    

}
ngOnInit() {
    
    
}

}
