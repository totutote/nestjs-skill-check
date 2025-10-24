import { Test, TestingModule } from '@nestjs/testing';
import { EstateTransactionController } from './estate-transaction.controller';
import { EstateTransactionService } from './estate-transaction.service';
import { ESTATE_TRANSACTION_REPOSITORY } from './repositories/estate-transaction.repository';

describe('EstateTransactionController', () => {
  let controller: EstateTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstateTransactionController],
      providers: [
        EstateTransactionService,
        {
          provide: ESTATE_TRANSACTION_REPOSITORY,
          useValue: { findOne: jest.fn() },
        },
      ],
    }).compile();

    controller = module.get<EstateTransactionController>(
      EstateTransactionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
