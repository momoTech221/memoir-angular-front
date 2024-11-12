import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../app/core/services/auth/login.service';
import { Router } from '@angular/router';
import { UserService } from '../../../app/core/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrl: './gestion-users.component.scss'
})
export class GestionUsersComponent implements OnInit{
  newTab: any[]=[];

  constructor(
    private registerService: LoginService,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  hasToDelete(): boolean {
    if (this.userService.getTypeUser() == 'Admin') {
      return true;
    } 
    if (this.userService.getTypeUser() == 'Super Admin') {
      return true;
    }else {
      return false;
    }
  }

  ngOnInit(): void {
    console.log(this.getusers());
  }

  allUser():any{
    this.registerService.getAllUsers().subscribe(
      res => {
       this.newTab= res;
       //console.log(this.newTab)
      })
      return this.newTab;
  }
  getusers():any {
    this.registerService.getActiveUsers().subscribe(
      res => {
        var j = 0
        if(this.userService.getTypeUser() == 'Super Admin'){ 
          for(var i=0; i<= res.length-1;i++){
            if(res[i].roles[0].name != 'Super Admin'){
              this.newTab[j] = res[i]
              j++;
            }
          }
        }else if(this.userService.getTypeUser() == 'Admin'){
          for(var i=0; i<= res.length-1;i++){
            if(res[i].roles[0].name != 'Admin' && res[i].roles[0].name != 'Super Admin'){
              this.newTab[j] = res[i]
              j++;
            }
          }
        }
        return this.newTab;
      },
    );
  }
}
