import { Module } from '@nestjs/common';
import { EstateTransactionService } from './estate-transaction.service';
import { EstateTransactionController } from './estate-transaction.controller';
import { JsonEstateTransactionRepository } from './repositories/json-estate-transaction.repository';
import { ESTATE_TRANSACTION_REPOSITORY } from './repositories/estate-transaction.repository';

@Module({
  controllers: [EstateTransactionController],
  providers: [
    EstateTransactionService,
    {
      provide: ESTATE_TRANSACTION_REPOSITORY,
      useClass: JsonEstateTransactionRepository,
    },
  ],
})
export class EstateTransactionModule {}
