import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';


const routes: Routes = [
  {path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),canActivate:[AuthService]},
  { path: 'connexion', loadChildren: () => import('./connexion/connexion.module').then(m => m.ConnexionModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
