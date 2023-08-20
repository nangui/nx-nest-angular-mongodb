import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Company } from '@production-angular/api-interfaces';

@Component({
  selector: 'production-angular-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss'],
})
export class CompaniesListComponent {
  @Input() companies: Company[] = [];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
