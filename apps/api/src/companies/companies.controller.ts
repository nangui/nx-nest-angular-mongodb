import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from '@production-angular/api-interfaces';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  create(@Body() company: Company) {
    return this.companiesService.create(company);
  }

  @Get()
  findAll() {
    return this.companiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companiesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() company: Company) {
    return this.companiesService.update(id, company);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companiesService.remove(id);
  }
}
