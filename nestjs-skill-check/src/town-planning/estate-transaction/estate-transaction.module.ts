import { Module } from '@nestjs/common';
import { EstateTransactionService } from './estate-transaction.service';
import { EstateTransactionController } from './estate-transaction.controller';

@Module({
  controllers: [EstateTransactionController],
  providers: [EstateTransactionService],
})
export class EstateTransactionModule {}
