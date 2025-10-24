import { Test, TestingModule } from '@nestjs/testing';
import { EstateTransactionController } from './estate-transaction.controller';
import { EstateTransactionService } from './estate-transaction.service';

describe('EstateTransactionController', () => {
  let controller: EstateTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstateTransactionController],
      providers: [EstateTransactionService],
    }).compile();

    controller = module.get<EstateTransactionController>(EstateTransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
