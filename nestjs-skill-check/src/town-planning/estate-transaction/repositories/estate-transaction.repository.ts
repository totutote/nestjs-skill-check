import { EstateTransaction } from '../entities/estate-transaction.entity';

export const ESTATE_TRANSACTION_REPOSITORY = Symbol(
  'ESTATE_TRANSACTION_REPOSITORY',
);

export interface EstateTransactionRepository {
  findOne(
    year: number,
    prefectureCode: number,
    type: number,
  ): Promise<EstateTransaction | null>;
}
