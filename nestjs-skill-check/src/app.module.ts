import { Module } from '@nestjs/common';
import { EstateTransactionModule } from './town-planning/estate-transaction/estate-transaction.module';

@Module({
  imports: [EstateTransactionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
