import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
  
  countries: Country[] = [];

  constructor(private countryService: CountryService){}

  ngOnInit(): void {
    this.getCountries();  
  }

  getCountries(){
    this.countryService.getCountries().subscribe((data: any) => {
      this.countries = data;
    });
  }


}
