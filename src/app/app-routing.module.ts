import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/core/services/auth.guard';

const routes: Routes = [
  { 
    path: 'clients',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/clients/clients.module').then(m => m.ClientsModule) 
  },
  { 
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
