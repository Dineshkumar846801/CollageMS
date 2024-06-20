import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './component/index/component.index';
import { RouterModule, Routes } from '@angular/router';
import { StudentLogin } from './component/auth/student/component.studentlogin';
import { TeacherLogin } from './component/auth/teacher/component.teacherlogin';
import { StudentDashboard } from './component/dashboard/student/student.dashboard';
import { TeacherDashboard } from './component/dashboard/teacher/teacher.dashboard';
import { NotFound } from './component/error/notfound/pagenotfound';

export const routes: Routes = [
  { path: '', redirectTo: '/index-page', pathMatch: 'full' },
  { path: 'index-page', component: IndexComponent },
  { path: 'teacher-login', component: TeacherLogin },
  { path: 'student-login', component: StudentLogin },
  { path: 'student-login/student-dashboard', component: StudentDashboard },
  { path: 'teacher-login/teacher-dashboard', component: TeacherDashboard },
  { path: '**', component: NotFound },
];
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    StudentLogin,
    TeacherLogin,
    StudentDashboard,
    TeacherDashboard,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}