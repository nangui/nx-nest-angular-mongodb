import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreDataModule } from '@production-angular/core-data';
import { CoreStateModule } from '@production-angular/core-state';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { CompaniesDetailsComponent } from './companies/companies-details/companies-details.component';
import { CompaniesListComponent } from './companies/companies-list/companies-list.component';
import { CompaniesComponent } from './companies/companies.component';
import { EmployeesDetailsComponent } from './employees/employees-details/employees-details.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './pages/home/home.component';
import { RoutingModule } from './routing.module';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { DrawerComponent } from './core/components/drawer/drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CompaniesDetailsComponent,
    CompaniesListComponent,
    EmployeesComponent,
    EmployeesDetailsComponent,
    EmployeesListComponent,
    HomeComponent,
    NavbarComponent,
    DrawerComponent,
  ],
  imports: [
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    RouterModule.forRoot(appRoutes),
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
