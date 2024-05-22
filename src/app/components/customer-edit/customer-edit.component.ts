import { Component } from '@angular/core';
import { Customer } from '../../interfaces/customer';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.css'
})
export class CustomerEditComponent {
  customer: Customer = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    country : {
      id : 0,
      name: "",
    }
  }

  countries: Country [] = [];

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute, private countryService: CountryService ){}
  
  ngOnInit(): void {
    
    const id =+ this.route.snapshot.paramMap.get( 'id' )!;
    this.customerService.getCustomerById(id).subscribe(
      data => this.customer = data
    );

    this.countryService.getCountries().subscribe(
      data => this.countries = data
    );

  }

  update(): void {
    this.customerService.updateCustomer(this.customer).subscribe(()=>{
      this.router.navigate(['/customers']);
    })
  }
}
