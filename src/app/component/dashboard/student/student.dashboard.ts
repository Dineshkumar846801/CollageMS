import { Component, OnInit } from '@angular/core';
import { StudentDashboardServices } from '../../services/studentdashboardservices';
import { StudentDashboardVM } from '../../modules/studentdashboardVM';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './student.dashboard.html',
  selector: 'student-dashboard',
  styleUrls: ['./student.dashboard.css'],
})
export class StudentDashboard implements OnInit {
  users: StudentDashboardVM[] = [];
  loggedUser: StudentDashboardVM | null = null;
  constructor(
    private studentDashboardServices: StudentDashboardServices,
    private acitvatedRoute: ActivatedRoute
  ) {}

  loadUserDashboard() {
    this.studentDashboardServices.fatch().subscribe({
      next: (_users) => {
        for (let i = 0; i < _users.length; i++) {
          if (_users[i].id === this.acitvatedRoute.snapshot.params['id']) {
            this.loggedUser = _users[i];
          }
        }
      },
    });
  }

  findUserLoggedIn() {}

  ngOnInit(): void {
    this.loadUserDashboard();
    this.findUserLoggedIn();
    console.log(this.loggedUser);
  }
}
