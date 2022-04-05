import { Bank } from "@domain/bank.domain";
import { Currency, TransactionCategory, TransactionType } from "@domain/transaction.domain";
import { Expose, Type } from "class-transformer";
import {
  IsCurrency,
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";

export class CreateTransactionDto {
  @IsDefined()
  @IsString()
  @IsCurrency({ allow_negatives: false, decimal_separator: "." })
  @IsNotEmpty()
  @Expose()
  amount: string;

  @IsDefined()
  @IsEnum(TransactionType)
  @IsNotEmpty()
  @Expose()
  type: TransactionType;

  @IsDefined()
  @IsEnum(TransactionCategory)
  @IsNotEmpty()
  @Expose()
  category: TransactionCategory;

  @IsDefined()
  @IsEnum(Currency)
  @IsNotEmpty()
  @Expose()
  currency: Currency;

  @IsString()
  @IsOptional()
  @Expose()
  description?: string;

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Bank)
  @Expose()
  bank: Bank;
}
