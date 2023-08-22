export interface BaseEntity {
  id: string | null;
}

export interface Company extends BaseEntity {
  name: string;
  description: string;
  address: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCompanyDto {
  name: string;
  description: string;
  address: string;
  email: string;
  phone: string;
}

export interface UpdateCompanyDto extends CreateCompanyDto {
  id: string;
}

export interface Employee extends BaseEntity {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateEmployeeDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyId: string;
}

export interface EmployeeWithCompany extends Employee {
  company: Company;
}
