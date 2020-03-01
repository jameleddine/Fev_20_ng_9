import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnexionRoutingModule } from './connexion-routing.module';
import { ConnexionComponent } from './connexion.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ConnexionComponent, LoginComponent, InscriptionComponent],
  imports: [
    CommonModule,
    ConnexionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConnexionModule { }
