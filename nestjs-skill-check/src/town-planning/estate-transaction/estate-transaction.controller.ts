import { Controller, Get, Query } from '@nestjs/common';
import { EstateTransactionService } from './estate-transaction.service';
import { GetBarQueryDto } from './dto/get-bar.query.dto';

@Controller('townPlanning/estateTransaction')
export class EstateTransactionController {
  constructor(
    private readonly estateTransactionService: EstateTransactionService,
  ) {}

  @Get('bar')
  async getBar(@Query() query: GetBarQueryDto) {
    return this.estateTransactionService.findOneValue(query);
  }
}
