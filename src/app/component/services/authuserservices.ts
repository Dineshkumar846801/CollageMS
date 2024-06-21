import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthUserMV } from '../modules/authuserVM';
@Injectable()
export class AuthUserServices {
  constructor(private http: HttpClient) {}

  fatch() {
    return this.http.get<AuthUserMV[]>('http://localhost:3000/student');
  }
}
