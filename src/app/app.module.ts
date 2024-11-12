import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from '../pages/principale/dashboard/dashboard.component';
import { HomeComponent } from '../pages/principale/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { LoginComponent } from '../pages/connexion/login/login.component';
import { RegisterComponent } from '../pages/connexion/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionUsersComponent } from '../pages/users/gestion-users/gestion-users.component';
import { GestionHideUsersComponent } from '../pages/users/gestion-hide-users/gestion-hide-users.component';
import { GestionCentreNaissanceComponent } from '../pages/initiation/gestion-centre-naissance/gestion-centre-naissance.component';
import { GestionCentreMariageComponent } from '../pages/initiation/gestion-centre-mariage/gestion-centre-mariage.component';
import { GestionCentreDecesComponent } from '../pages/initiation/gestion-centre-deces/gestion-centre-deces.component';
import { GestionRegistreNaissanceComponent } from '../pages/initiation/gestion-registre-naissance/gestion-registre-naissance.component';
import { GestionRegistreMariageComponent } from '../pages/initiation/gestion-registre-mariage/gestion-registre-mariage.component';
import { GestionRegistreDecesComponent } from '../pages/initiation/gestion-registre-deces/gestion-registre-deces.component';
import { GestionFormationDecesComponent } from '../pages/initiation/gestion-formation-deces/gestion-formation-deces.component';
import { GestionFormationNaissanceComponent } from '../pages/initiation/gestion-formation-naissance/gestion-formation-naissance.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    GestionUsersComponent,
    GestionHideUsersComponent,
    GestionCentreNaissanceComponent,
    GestionCentreMariageComponent,
    GestionCentreDecesComponent,
    GestionRegistreNaissanceComponent,
    GestionRegistreMariageComponent,
    GestionRegistreDecesComponent,
    GestionFormationDecesComponent,
    GestionFormationNaissanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
