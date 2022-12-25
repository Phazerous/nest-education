import { Injectable } from '@nestjs/common';
import Company from 'src/companies/models/Company';

@Injectable()
export class CompaniesService {
  private companies: Company[] = [new Company('PhazeInc', 'Engineering', 10)];

  createCompany(name: string, service: string, employeesCount: number) {
    const company = new Company(name, service, employeesCount);
    this.companies.push(company);
  }

  findCompanyByName(name: string) {
    const company = this.companies.find(
      (company) => company.getName() === name,
    );

    return company;
  }
}
