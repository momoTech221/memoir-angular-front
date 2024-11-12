import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../app/core/services/auth/login.service';
import { UserService } from '../../../app/core/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  logError: boolean = false;
  connectionError: boolean = false;
  invalidForm: boolean = false;
  messages: string = '';
  fullName: string = '';
  typeRole: string[] = [];

  ngOnInit(): void {
    this.userService.clearAllData();
    this.router.navigate(['login'])
  }

  formInvalid(){
    this.invalidForm = false;
  //  this.loginForm.reset();
    this.router.navigate(['login'])
  }

  loginOrPassword(){
    this.messages = '';
  }

  serveurIndisponible(){
    this.connectionError = false;
    this.router.navigate(['login'])
    //this.loginForm.reset();
  }

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: LoginService,
    private userService: UserService,
    private toastr: ToastrService){
      this.loginForm = this.fb.group({
        mail: ['', [Validators.required, Validators.email]],
        mdp: ['', Validators.required],
      });
    }
    faireDemmande(){
      this.toastr.error(
        'Faire une Demmande',
        'Test',
        {
          timeOut: 5000,
          closeButton: true,
          progressBar: true,
          tapToDismiss: false,
          positionClass: 'toast-center-center',
        }
      );
    }
    seConnecter(){
      this.userService.clearAllData();
      if (this.loginForm.valid) {
        const log = this.loginForm.value['mail'];
        const pwd = this.loginForm.value['mdp'];
  
        let data = {
          login: log,
          password: pwd,
        };
        this.service.log(data).subscribe(
          (response) => {
            if (response.etatCompte == false) {
              this.userService.clearAllData();
              this.toastr.error(
                'Votre compte est actuellement indisponible',
                'Connexion impossible',
                {
                  timeOut: 5000,
                  closeButton: true,
                  progressBar: true,
                  tapToDismiss: false,
                  positionClass: 'toast-top-right',
                }
              );
              this.router.navigate(['login']);
              this.loginForm.reset();
            } else {
              this.userService.clearAllData();
              // this.fullName = response.nom + ' ' + response.prenom;
              this.fullName = response.login;
              this.userService.setCurrentUser(this.fullName);
              this.userService.setToken(response.token);
  
              // this.isAuth = true;
              this.logError = false;
  
              for (var i = 0; i < response.roles.length; i++) {
                this.typeRole[i] = response.roles[i].name;
              }
  
              if (this.typeRole.includes('Admin')) {
                // this.toastr.show('Cette utilisateur est un admin');
                // this.router.navigate(['acceuilAdmin']);
                // this.toastr.success('La connexion a reussi', 'reussi', {
                //   timeOut: 5000,
                //   closeButton: true,
                //   progressBar: true,
                //   tapToDismiss: false,
                //   positionClass: 'toast-top-right',
                // });
                this.userService.setTypeUser('Admin');
                this.router.navigate(['dashboard']);
              }
              else if (this.typeRole.includes('Officier etat civil')) {
                // this.toastr.show(
                //   'Cette utilisateur est un officier d etat civil'
                // );
                this.userService.setTypeUser('Officier etat civil');
                this.router.navigate(['dashboard']);
                this.userService.setTypeUser('Officier etat civil');
              } else if (this.typeRole.includes('Prestataire')) {
               
                this.router.navigate(['dashboard']);
                this.userService.setTypeUser('Prestataire');
              }
              else if (this.typeRole.includes('Super Admin')) {
               
                this.router.navigate(['dashboard']);
                this.userService.setTypeUser('Super Admin');
              }
              else if (this.typeRole.includes('Particulier')) {
                
                this.router.navigate(['dashboard']);
                this.userService.setTypeUser('Particulier');
              } else if (this.typeRole.includes('Agent saisie')) {
                
                this.router.navigate(['dashboard']);
                this.userService.setTypeUser('Agent saisie');
              } else {
                // this.toastr.error(
                //   'Vous n etes pas autorisé à vous connecter',
                //   'Attention !!!',
                //   {
                //     timeOut: 5000,
                //     closeButton: true,
                //     progressBar: true,
                //     tapToDismiss: false,
                //     positionClass: 'toast-top-right',
                //   }
                // );
                this.userService.clearAllData();
                this.router.navigate(['login']);
              }
            }
          },
          (e) => {
            // console.log(e);
            //Recupére le message d'erreur issu du serveur.
            if (e) {
              if (e.status == 0) {
                console.log('Le service est momentannement indisponible')
                // this.messages =
                //   'Le service est momentannement indisponible, merci de réessayer ulterieurement.';
                this.connectionError = true;
                  // this.toastr.warning(this.messages, 'erreur', {
                //   timeOut: 5000,
                //   closeButton: true,
                //   progressBar: true,
                //   tapToDismiss: false,
                //   positionClass: 'toast-top-right',
                // });
                // this.isAuth = false;
                //this.router.navigate(['login']);
                this.userService.clearAllData();
              } else if (
                e.error.message == 'Unauthorized path' &&
                e.status == 401
              ) {
                // this.messages = e.error.message;
                this.messages =
                  'Votre Session a été annulée veuillez vous reconnectez';
                // console.log(this.messages);
                // this.isAuth = false;
                this.logError = true;
                this.userService.clearAllData();
                this.router.navigate(['login']);
                this.loginForm.reset();
              } else {
                this.messages = e.error.message;
                // this.isAuth = false;
                // this.toastr.error(this.messages, 'erreur', {
                //   timeOut: 5000,
                //   closeButton: true,
                //   progressBar: true,
                //   tapToDismiss: false,
                //   positionClass: 'toast-top-right',
                // });
                this.userService.clearAllData();
                this.router.navigate(['login']);
                this.loginForm.reset();
              }
            }
          }
        );
      }
      else{
        console.log('form invalid')
        this.invalidForm = true
      }
    }
}
