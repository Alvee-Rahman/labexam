import { Module } from '@nestjs/common';
import { EmpController } from './emp.controller';
import { EmpService } from './emp.service';
@Module({
  imports: [],
  controllers: [EmpController],
  providers: [EmpService],
})
export class EmpModule {
    constructor()
    {
        console.log('emp module');
    }
}