import { Module } from '@nestjs/common';

import { CompaniesModule } from '../companies/companies.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CompaniesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
