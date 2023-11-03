import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EmpService } from './emp.service'; // Import your EmpService
import { emp } from './empdata/emp.dto';

@Controller('emp')
export class EmpController {
  constructor(private readonly empService: EmpService) {}


@Get('/findall')
getallemp() : emp[]{
  return this.empService.findallemp();
}


  @Post("/add")
  addEmployee(@Body() emp: emp) {
    return this.empService.addEmpService(emp);
  }

  @Put('/update')
  updateEmployee(@Param('id') Number, @Body() emp: emp) {
     
    return this.empService.updateEmpService(emp);
  }

  @Delete('/delete/:id')
  deleteEmployee(@Param('id') id: Number) {
    
    return this.empService.deleteEmpService(id);
  }

  @Get(':id')
    findOne(@Param('id') id: Number) {
        return this.empService.findOne(id);
  }
}
