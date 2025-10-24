import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { EstateTransactionService } from './estate-transaction.service';
import { ESTATE_TRANSACTION_REPOSITORY } from './repositories/estate-transaction.repository';
import type { EstateTransactionRepository } from './repositories/estate-transaction.repository';

describe('EstateTransactionService', () => {
  let service: EstateTransactionService;
  let repository: EstateTransactionRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EstateTransactionService,
        {
          provide: ESTATE_TRANSACTION_REPOSITORY,
          useValue: { findOne: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<EstateTransactionService>(EstateTransactionService);
    repository = module.get<EstateTransactionRepository>(
      ESTATE_TRANSACTION_REPOSITORY,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOneValue', () => {
    it('should return only the value (price)', async () => {
      const mockData = {
        year: 2015,
        prefectureCode: 13,
        type: 1 as 1 | 2,
        data: {
          result: {
            prefectureCode: '13',
            prefectureName: '東京都',
            type: '1' as '1' | '2',
            years: [{ year: 2015, value: 324740 }],
          },
        },
      };

      const findOneSpy = jest
        .spyOn(repository, 'findOne')
        .mockResolvedValue(mockData);

      const result = await service.findOneValue({
        year: 2015,
        prefectureCode: 13,
        type: 1,
      });

      expect(result).toBe(324740);
      expect(findOneSpy).toHaveBeenCalledWith(2015, 13, 1);
    });

    it('should throw NotFoundException when no data found', async () => {
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);

      const promise = service.findOneValue({
        year: 2015,
        prefectureCode: 13,
        type: 1,
      });
      await expect(promise).rejects.toThrow(NotFoundException);
    });
  });
});
