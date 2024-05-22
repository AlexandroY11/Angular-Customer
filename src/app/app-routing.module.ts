import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { CountryListComponent } from './components/country-list/country-list.component';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent},
  { path: 'customers/create', component: CustomerCreateComponent},
  { path: 'customers/edit/:id', component: CustomerEditComponent},
  { path: 'countries', component: CountryListComponent},
  { path: '', redirectTo:'/customers', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
