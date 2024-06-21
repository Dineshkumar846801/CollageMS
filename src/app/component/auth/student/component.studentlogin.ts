import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthUserMV } from '../../modules/authuserVM';
import { AuthUserServices } from '../../services/authuserservices';

@Component({
  selector: 'student-login',
  templateUrl: './component.studentlogin.html',
  styleUrls: ['./component.studentlogin.css'],
})
export class StudentLogin {
  userId = new FormControl('');

  auths: AuthUserMV[] = [];
  loggedIn: AuthUserMV | any;
  constructor(private authServices: AuthUserServices) {}

  fetchAuth() {
    this.authServices.fatch().subscribe({
      next: (_auths) => {
        this.auths = _auths as AuthUserMV[];
      },
    });
  }

  loggedInUserDetails() {
    for (let i = 0; i < this.auths.length; i++) {
      if (this.auths[i].id === this.userId.value) {
        this.loggedIn = this.auths[i];
      }
    }
  }

  ngOnInit(): void {
    this.fetchAuth();
  }
}
