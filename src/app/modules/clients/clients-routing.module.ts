import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientResolverService } from 'src/app/core/services/client-resolver.service';

import { ClientsComponent } from './clients.component';

const routes: Routes = [
  { 
    path: '',
    component: ClientsComponent,
    resolve: {
      routeResolver: ClientResolverService
    }, 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
