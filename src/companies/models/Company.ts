import { nanoid } from 'nanoid';

export default class Company {
  private companyId: string;

  constructor(
    private name: string,
    private service: string,
    private employeesCount: number,
  ) {
    this.companyId = nanoid();
  }

  public getCompanyId() {
    return this.companyId;
  }

  public getName() {
    return this.name;
  }

  public getService() {
    return this.service;
  }

  public getEmployeesCount() {
    return this.employeesCount;
  }
}
