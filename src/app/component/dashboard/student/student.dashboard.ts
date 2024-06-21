import { Component, OnInit } from '@angular/core';
import { AuthUserServices } from '../../services/authuserservices';
import { AuthUserMV } from '../../modules/authuserVM';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './student.dashboard.html',
  selector: 'student-dashboard',
  styleUrls: ['./student.dashboard.css'],
})
export class StudentDashboard implements OnInit {
  auths: AuthUserMV[] = [];
  constructor(
    private authServices: AuthUserServices,
    private httpClient: HttpClient
  ) {}

  fetchAuth() {
    this.authServices.fatch().subscribe({
      next: (_auths) => {
        this.auths = _auths as AuthUserMV[];
      },
    });
  }

  ngOnInit(): void {
    this.fetchAuth();
  }
}
