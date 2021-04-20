import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private baseUrl = environment.baseUrl + '/address/';
  constructor(private http: HttpClient) { }

  public aggregateByField(field: string): Observable<any> {
    const result = this.http.post<any>(this.baseUrl + 'AggregateByField?field='+field, null);
    return result;
  }
}
