import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../../core/data-services/authentication.service';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let isUserLoggedIn = this.authenticationService.isUserLoggedIn();
        const currentUser = this.authenticationService.currentUser();
        if (isUserLoggedIn) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate([''], { queryParams: { returnUrl: state.url } });
        return false;
    }
}