import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  students:Student[];
  constructor(private studentservice: StudentService) { }
  getStudent1(): void {
    this.studentservice.getStudent()
    .subscribe(students => this.students = students);
}
deletestudent(id:string):void{
  this.studentservice.deleteStudent(id)
  .subscribe(()=>this.students =this.students=this.students.filter(f=>f.id!==id));
}
  ngOnInit() {
    this.getStudent1();
  }

}
