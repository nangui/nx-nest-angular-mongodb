import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { CoreDataModule } from '@production-angular/core-data';
import { CoreStateModule } from '@production-angular/core-state';
import { RoutingModule } from './routing.module';
import { CompaniesComponent } from './companies/companies.component';
import { CompaniesListComponent } from './companies/companies-list/companies-list.component';
import { CompaniesDetailsComponent } from './companies/companies-details/companies-details.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeesDetailsComponent } from './employees/employees-details/employees-details.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CompaniesListComponent,
    CompaniesDetailsComponent,
    EmployeesComponent,
    EmployeesListComponent,
    EmployeesDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    CoreDataModule,
    CoreStateModule,
    RoutingModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
