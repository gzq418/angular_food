import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Student1Service {

  private studentUrl = 'http://localhost:2403/student';
  constructor(private httpClient: HttpClient) { }
  addStudent(student:Student): Observable<Student> {
    return this.httpClient.post<Student>(this.studentUrl, student);
  }
}
