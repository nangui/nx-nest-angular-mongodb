import { Component } from '@angular/core';
import { Company } from '@production-angular/api-interfaces';

@Component({
  selector: 'production-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  companies: Company[] = [
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
}
