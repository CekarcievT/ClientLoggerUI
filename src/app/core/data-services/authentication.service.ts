import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginUser } from 'src/app/core/models/LoginUser';
import { Router } from '@angular/router';
import { AuthorizationInfo } from 'src/app/core/models/AuthorizationInfo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = environment.baseUrl + '/authentication/';

    constructor(private http: HttpClient, private router: Router) { }

    public currentUser(): AuthorizationInfo {
        return JSON.parse(localStorage.getItem('currentUser_CL'));
    }

    public isUserLoggedIn(): boolean {
      let currentUser = this.currentUser();
      if (currentUser) {
          return true;
      }
      return false;
    }

    public login(userLogin: LoginUser) {
      return this.http.post<any>(this.baseUrl + 'Login/', userLogin).subscribe(result=>{
        localStorage.setItem('currentUser_CL', JSON.stringify(result.data));
        this.router.navigate(['clients']);
      });   
    }
  

    public logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser_CL');
        location.reload();
    }
}
