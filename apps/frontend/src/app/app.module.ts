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
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { UiModule } from '@production-angular/ui';

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
  ],
  imports: [
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    RouterModule.forRoot(appRoutes),
    RoutingModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
