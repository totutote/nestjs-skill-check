import { Type } from 'class-transformer';
import { IsIn, IsInt, IsNotEmpty, Min, Max } from 'class-validator';

export class GetBarQueryDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @Min(2015)
  @Max(2018)
  year!: number;

  // 関東の都県コード: 茨城(8), 栃木(9), 群馬(10), 埼玉(11), 千葉(12), 東京(13), 神奈川(14)
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @IsIn([8, 9, 10, 11, 12, 13, 14])
  prefectureCode!: number;

  // 1: 住宅地, 2: 商業地
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @IsIn([1, 2])
  type!: number;
}
