import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../app/core/services/user.service';
import { LoginService } from '../../../app/core/services/auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  u = 0;
  title = 'E-mairie';
  fullName: any;
  ngOnInit(): void {
    // this.userService.clearAllData();
  }

  constructor(
    private userService: UserService,
    private service: LoginService,
    private route: Router
  ) {}

  UserName(){
    return this.userService.getCurrentUser();
  }

  isConnect(){
    return this.userService.getTypeUser();
  }

  disconnect() {
    this.userService.logout();
    this.route.navigate(['login']);
  }
}
