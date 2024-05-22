import { Component } from '@angular/core';
import { Customer } from '../../interfaces/customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.css'
})
export class CustomerCreateComponent {
  customer: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    country : {
      id : 0,
      name: "",
    }
  };

  countries: Country [] = [];

  constructor(private customerService: CustomerService, private router: Router, private countryService : CountryService){}

  ngOnInit(): void {

    this.countryService.getCountries().subscribe(
      data => this.countries = data
    );      
  }

  save(): void {
    this.customerService.createCustomer(this.customer).subscribe(()=>{
      this.router.navigate(['/customers']);
    })
  }

}
