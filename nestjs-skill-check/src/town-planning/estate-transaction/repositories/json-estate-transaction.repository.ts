import { Injectable, Logger } from '@nestjs/common';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { EstateTransaction } from '../entities/estate-transaction.entity';
import { EstateTransactionRepository } from './estate-transaction.repository';

@Injectable()
export class JsonEstateTransactionRepository
  implements EstateTransactionRepository
{
  private readonly logger = new Logger(JsonEstateTransactionRepository.name);
  private readonly records: EstateTransaction[];

  constructor() {
    const filePath = resolve(
      __dirname,
      '..',
      'assets',
      'estate_transactions.json',
    );
    const raw = readFileSync(filePath, 'utf-8');
    this.records = JSON.parse(raw) as EstateTransaction[];
    this.logger.log(`Loaded ${this.records.length} estate transactions`);
  }

  findOne(
    year: number,
    prefectureCode: number,
    type: number,
  ): Promise<EstateTransaction | null> {
    const rec = this.records.find(
      (r) =>
        r.year === year &&
        r.prefectureCode === prefectureCode &&
        r.type === type,
    );
    return Promise.resolve(rec ?? null);
  }
}
