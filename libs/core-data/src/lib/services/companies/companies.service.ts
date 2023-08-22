import { Injectable } from '@angular/core';
import { Company } from '@production-angular/api-interfaces';

const API_ENDPOINT = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  model = 'companies';

  async all(): Promise<Company[]> {
    return fetch(this.getUrl()).then(res => res.json());
  }

  async find (id: string): Promise<Company> {
    return fetch(this.getUrlWithId(id)).then(res => res.json());
  }

  async create(company: Company): Promise<Company> {
    return fetch(this.getUrl(), {
      ...this.requestInit('POST'),
      body: JSON.stringify(company)
    }).then(res => res.json());
  }

  async update(company: Company): Promise<Company> {
    if (!company.id) {
      return this.create(company);
    }
    return fetch(this.getUrlWithId(company.id), {
      ...this.requestInit('PUT'),
      body: JSON.stringify(company)
    }).then(res => res.json());
  }

  async delete(company: Company): Promise<void> {
    if (!company.id) return;

    fetch(this.getUrlWithId(company.id), {
      method: 'DELETE'
    });
  }

  private getUrl(): string {
    return `${API_ENDPOINT}/${this.model}`;
  }

  private getUrlWithId(id: string): string {
    return `${this.getUrl()}/${id}`;
  }

  private requestInit (method: string): RequestInit {
    return {
      method,
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    }
  }
}
