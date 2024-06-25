import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { StudentDashboardVM } from '../../modules/studentdashboardVM';

@Component({
  selector: 'navbar-comp',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() profile_photo: StudentDashboardVM | null = null;
}
