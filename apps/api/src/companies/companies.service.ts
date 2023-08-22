import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { Company } from '@production-angular/api-interfaces';

@Injectable()
export class CompaniesService {
  mockCompanies: Company[] = [
    {
      id: '1',
      name: 'Company 1',
      description: 'Company 1 description',
      email: 'company1@test.com',
      phone: '+1234007890',
      address: 'Company 1 address',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },
    {
      id: '2',
      name: 'Company 2',
      description: 'Company 2 description',
      email: 'company2@test.com',
      phone: '+1234567136',
      address: 'Company 2 address',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },
    {
      id: '3',
      name: 'Company 3',
      description: 'Company 3 description',
      email: 'company3@test.com',
      phone: '+1334562936',
      address: 'Company 3 address',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }
  ]

  create(createCompanyDto: Company) {
    this.mockCompanies = [...this.mockCompanies, Object.assign({}, createCompanyDto, { id: uuidv4() })];
  }

  findAll() {
    return this.mockCompanies;
  }

  findOne(id: string) {
    return this.mockCompanies.find(company => company.id === id);
  }

  update(id: string, updateCompanyDto: Company) {
    this.mockCompanies = this.mockCompanies.map(company => (company.id === id ? updateCompanyDto : company));
    return this.mockCompanies.find(company => company.id === id);
  }

  remove(id: string) {
    this.mockCompanies = this.mockCompanies.filter(company => company.id !== id);
    return this.mockCompanies.find(company => company.id === id);
  }
}
