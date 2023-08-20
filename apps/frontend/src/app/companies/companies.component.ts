import { Component, OnInit } from '@angular/core';
import { Company } from '@production-angular/api-interfaces';

const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'Narco',
    description: 'The best company ever',
    address: '123 Main St',
    phone: '123-456-7890',
    email: 'narco@test.sn',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  },
  {
    id: '2',
    name: 'Bombasto',
    description: 'The best company ever',
    address: '130 Main St',
    phone: '123-456-2060',
    email: 'bombasto@test.sn',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  },
  {
    id: '3',
    name: 'Celeritas',
    description: 'The best company ever',
    address: '130 Main St',
    phone: '123-456-2060',
    email: 'celeritas',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  },
];

const emptyCompany: Company = {
  id: null,
  name: '',
  description: '',
  address: '',
  phone: '',
  email: '',
  createdAt: '',
  updatedAt: ''
};

@Component({
  selector: 'production-angular-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  companies!: Company[];
  selectedCompany!: Company;

  ngOnInit() {
    this.reset();
  }

  reset() {
    this.loadCompanies();
    this.selectCompany({} as Company);
  }

  resetForm() {
    this.selectedCompany = emptyCompany;
  }

  selectCompany(company: Company) {
    this.selectedCompany = company;
  }

  loadCompanies() {
    this.companies = mockCompanies;
  }

  saveCompany(company: Company) {
    if (company.id) {
      this.updateCompany(company);
    } else {
      this.createCompany(company);
    }
  }

  createCompany(company: Company) {
    const newCompany = Object.assign({}, company, { id: this.getRandomID() });
    this.companies = [...this.companies, newCompany];
    this.resetForm();
  }

  updateCompany(company: Company) {
    this.companies = this.companies.map((c) =>
      c.id === company.id ? company : c
    );
    this.resetForm();
  }

  deleteCompany(company: Company) {
    this.companies = this.companies.filter((c) => c.id !== company.id);
    this.resetForm();
  }

  private getRandomID() {
    return Math.random().toString(36).substring(7);
  }
}
