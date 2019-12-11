import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentUrl = 'http://localhost:2403/student';
  constructor(private httpClient: HttpClient) { }
  getStudent(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.studentUrl);
  }


  deleteStudent(id: string): Observable<any> {
    return this.httpClient.delete(`${this.studentUrl}/${id}`);
  }
  
}
