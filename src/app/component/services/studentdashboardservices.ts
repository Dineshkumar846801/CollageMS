import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentDashboardVM } from '../modules/studentdashboardVM';

@Injectable()
export class StudentDashboardServices {
  constructor(private http: HttpClient) {}

  fatch() {
    return this.http.get<StudentDashboardVM[]>(
      'http://localhost:3000/student-dashboard'
    );
  }
}
