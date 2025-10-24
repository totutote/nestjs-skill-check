import { Test, TestingModule } from '@nestjs/testing';
import { EstateTransactionController } from './estate-transaction.controller';
import { EstateTransactionService } from './estate-transaction.service';
import { ESTATE_TRANSACTION_REPOSITORY } from './repositories/estate-transaction.repository';

describe('EstateTransactionController', () => {
  let controller: EstateTransactionController;
  let service: EstateTransactionService;

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
    service = module.get<EstateTransactionService>(EstateTransactionService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getBar', () => {
    it('should call service.findOneValue with query parameters', async () => {
      const mockQuery = {
        year: 2015,
        prefectureCode: 8,
        type: 1,
      };
      const mockResult = 22871;

      jest.spyOn(service, 'findOneValue').mockResolvedValue(mockResult);

      const result = await controller.getBar(mockQuery as any);

      expect(service.findOneValue).toHaveBeenCalledWith(mockQuery);
      expect(result).toEqual(mockResult);
    });
  });
});
