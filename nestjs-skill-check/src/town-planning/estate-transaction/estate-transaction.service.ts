import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { GetBarQueryDto } from './dto/get-bar.query.dto';
import { ESTATE_TRANSACTION_REPOSITORY } from './repositories/estate-transaction.repository';
import type { EstateTransactionRepository } from './repositories/estate-transaction.repository';

@Injectable()
export class EstateTransactionService {
  constructor(
    @Inject(ESTATE_TRANSACTION_REPOSITORY)
    private readonly repo: EstateTransactionRepository,
  ) {}

  async findOneValue(query: GetBarQueryDto) {
    const { year, prefectureCode, type } = query;
    const rec = await this.repo.findOne(year, prefectureCode, type);
    if (!rec) {
      throw new NotFoundException(
        `No data for year=${year}, prefectureCode=${prefectureCode}, type=${type}`,
      );
    }
    return rec.data.result.years[0].value;
  }
}
