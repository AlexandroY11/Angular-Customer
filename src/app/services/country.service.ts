import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  api : string = 'http://localhost:8080/countries';

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.api);
  }
  
  getCountryById(id: string): Observable<Country> {
    return this.http.get<Country>(`${this.api}/${id}`);
  }

}
