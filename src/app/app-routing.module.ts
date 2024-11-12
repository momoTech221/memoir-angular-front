import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../pages/principale/dashboard/dashboard.component';
import { HomeComponent } from '../pages/principale/home/home.component';
import { LoginComponent } from '../pages/connexion/login/login.component';
import { RegisterComponent } from '../pages/connexion/register/register.component';
import { GestionUsersComponent } from '../pages/users/gestion-users/gestion-users.component';
import { GestionHideUsersComponent } from '../pages/users/gestion-hide-users/gestion-hide-users.component';
import { GestionCentreNaissanceComponent } from '../pages/initiation/gestion-centre-naissance/gestion-centre-naissance.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    title: 'Connexion',
    component: LoginComponent,
  },
  {
    path: 'register',
    title: 'Inscription',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    title: 'Taleau de bord',
    component: DashboardComponent,
  },
  {
    path: 'home',
    title: 'Acceuil',
    component: HomeComponent,
  },
  {
    path: 'gestionUser',
    title: 'Gestion utilisateurs',
    component: GestionUsersComponent,
  },
  {
    path: 'gestionHideUser',
    title: 'Gestion utilisateurs bloqués',
    component: GestionHideUsersComponent,
  },
  {
    path: 'gestionCentreNaissance',
    title: 'Gestion des centres de naissance',
    component: GestionCentreNaissanceComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
