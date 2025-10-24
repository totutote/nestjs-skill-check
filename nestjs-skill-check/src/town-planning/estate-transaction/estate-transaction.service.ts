import { Injectable } from '@nestjs/common';
import { GetBarQueryDto } from './dto/get-bar.query.dto';

@Injectable()
export class EstateTransactionService {
  findAll(query: GetBarQueryDto) {
    const { year, prefectureCode, type } = query;
    return {
      query: { year, prefectureCode, type },
      data: [],
    };
  }
}
