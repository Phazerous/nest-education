import { Body, Controller, Get, Inject, Param } from '@nestjs/common';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {}

  @Get(':name')
  getCompany(@Param('name') name: string) {
    const company = this.companiesService.findCompanyByName(name);

    if (!company) return `Company doesn't exist.`;

    return company;
  }
}
