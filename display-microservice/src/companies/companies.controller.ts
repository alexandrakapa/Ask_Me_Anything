import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from './company.entity';

@Controller('companies')
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) {}


  @Get()
  async getAll():Promise<Company[]>{
    return await this.companiesService.findAll();
  }

  @Post('add')
  @HttpCode(201)
  createEmployee(@Body() newCompany:any){
    this.companiesService.create(newCompany);
  }
}
