import { Injectable } from '@angular/core';
import { Employee } from '@production-angular/api-interfaces';

const API_ENDPOINT = 'http://localhost:3333';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  model = 'employees';

  async all(): Promise<Employee[]> {
    return fetch(this.getUrl()).then(res => res.json());
  }

  async find (id: string): Promise<Employee> {
    return fetch(this.getUrlWithId(id)).then(res => res.json());
  }

  async create(company: Employee): Promise<Employee> {
    return fetch(this.getUrl(), {
      ...this.requestInit('POST'),
      body: JSON.stringify(company)
    }).then(res => res.json());
  }

  async update(company: Employee): Promise<Employee> {
    if (!company.id) {
      return this.create(company);
    }
    return fetch(this.getUrlWithId(company.id), {
      ...this.requestInit('PUT'),
      body: JSON.stringify(company)
    }).then(res => res.json());
  }

  async delete(company: Employee): Promise<void> {
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
      headers: { 'Content-Type': 'application/json' }
    }
  }
}
