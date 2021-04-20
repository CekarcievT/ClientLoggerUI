import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import { ClientFullInfo } from '../models/ClientFullInfo';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = environment.baseUrl + '/client/';
  constructor(private http: HttpClient) { }

  public getAllClients(): Observable<any> {
    const result = this.http.post<any>(this.baseUrl + 'GetAllClients', null);
    return result;
  }

  public createClient(data: ClientFullInfo): Observable<any> {
    const result = this.http.post<any>(this.baseUrl + 'CreateClient', data);
    return result;
  }

  public updateClient(data: ClientFullInfo): Observable<any> {
    const result = this.http.post<any>(this.baseUrl + 'UpdateClient', data);
    return result;
  }

  public deleteClient(data: ClientFullInfo): Observable<any> {
    const result = this.http.post<any>(this.baseUrl + 'DeleteClient', data);
    return result;
  }
}
