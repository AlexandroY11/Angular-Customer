import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  api : string = "http://localhost:8080/customers";

  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.api);
  }

  getCustomerById(id: number): Observable<Customer>{
    return this.http.get<Customer>(`${this.api}/${id}`);
  }

  createCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.api + "/create", customer);
  }

  updateCustomer(customer: Customer): Observable<Customer>{
    return this.http.put<Customer>(this.api, customer);
  }

  deleteCustomer(id: number): Observable<Customer>{
    return this.http.delete<Customer>(`${this.api}/${id}`);
  }

}
