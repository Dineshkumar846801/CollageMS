import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'teacher-login',
  templateUrl: './component.teacherlogin.html',
  styleUrls: ['./component.teacherlogin.css'],
})
export class TeacherLogin {
  constructor(private router: Router) {}
  navigateToTeacherdashboard() {
    this.router.navigateByUrl('/teacher-login/teacher-dashboard');
  }
}
