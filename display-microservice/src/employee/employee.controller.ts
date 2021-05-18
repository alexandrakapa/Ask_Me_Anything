import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import {EmployeeService} from './employee.service';
import {Employee} from './employee.entity';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService){}

  @Get()
  async getAll():Promise<Employee[]>{
    return await this.employeeService.findAll();
  }

  @Post('add')
  @HttpCode(201)
  createEmployee(@Body() newEmployee:any){
    this.employeeService.create(newEmployee);
  }

}
