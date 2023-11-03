import { Module } from '@nestjs/common';
import { EmpModule } from './employee/emp.module';
@Module({
  imports: [EmpModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {
  constructor()
  {
    console.log('app module');
  }
}

