import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ClientService } from '../data-services/client.service';

@Injectable({
  providedIn: 'root'
})
export class ClientResolverService implements Resolve<any> {

  constructor(private clientService: ClientService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.clientService.getAllClients();
  }
}
