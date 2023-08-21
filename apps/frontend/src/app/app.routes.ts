import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { EmployeesComponent } from './employees/employees.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: '**', redirectTo: '/' },
];
