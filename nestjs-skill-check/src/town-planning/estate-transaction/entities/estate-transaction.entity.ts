export type EstateTransactionResult = {
  prefectureCode: string;
  prefectureName: string;
  type: '1' | '2';
  years: Array<{ year: number; value: number }>;
};

export class EstateTransaction {
  year!: number;
  prefectureCode!: number;
  type!: 1 | 2;
  data!: {
    result: EstateTransactionResult;
  };
}
