import { Component, OnInit, inject } from '@angular/core';
import { Company } from '@production-angular/api-interfaces';
import { CompaniesService } from '@production-angular/core-data';

@Component({
  selector: 'production-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  companiesService = inject(CompaniesService);

  companies$ = {} as Promise<Company[]>;

  ngOnInit(): void {
    this.loadCompanies();
  }

  async loadCompanies() {
    try {
      this.companies$ = this.companiesService.all();
    } catch (error) {
      console.error(error);
    }
  }
}
