import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cities, Countries } from '../models/csc.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly COUNTRIES_API_BASE_URL = environment.COUNTRIES_API_BASE_URL;
  private readonly X_CSC_API_KEY = environment.COUNTRIES_API_KEY;

  private readonly API_BASE_URL = environment.API_BASE_URL;
  private readonly API_ACTION_BASE_URL = environment.API_ACTION_BASE_URL;

  constructor(private __http__: HttpClient) { }

  public getAllCountriesDetails(actionUrl: string): Observable<Countries> {
    const requestUrl = `${this.COUNTRIES_API_BASE_URL + actionUrl}`;
    return this.__http__.get(requestUrl, {
      headers: new HttpHeaders().append('X-CSCAPI-KEY', this.X_CSC_API_KEY)
    }) as Observable<Countries>;
  }

  public getCityNameByStateByCountry(actionUrl: string): Observable<Cities> {
    const requestUrl = `${this.COUNTRIES_API_BASE_URL + actionUrl}`;
    return this.__http__.get(requestUrl, {
      headers: new HttpHeaders().append('X-CSCAPI-KEY', this.X_CSC_API_KEY)
    }) as Observable<Cities>;
  }

  public postNewData(actionUrl: string, data: any): Observable<any>{
    const requestUrl = `${this.API_BASE_URL + this.API_ACTION_BASE_URL + actionUrl}`;
    return this.__http__.post(requestUrl, data, {
      headers: new HttpHeaders().append('X-CSCAPI-KEY', this.X_CSC_API_KEY)
    }) as Observable<any>;
  }
}
