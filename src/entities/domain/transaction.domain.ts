import { Expose, Type } from "class-transformer";
import {
  IsCurrency,
  IsDateString,
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { Bank } from "./bank.domain";

export enum TransactionType {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE",
}

export enum TransactionCategory {
  SALARY = "SALARY",
  FOOD = "FOOD",
  TRANSPORT = "TRANSPORT",
  HOUSE = "HOUSE",
  OTHER = "OTHER",
}

export enum Currency {
  USD = "USD",
  EUR = "EUR",
}

export type CreateTransactionDto = Pick<
  Transaction,
  "amount" | "type" | "category" | "currency" | "description" | "bank"
>;

export type LoadQueryParams = {
  category?: TransactionCategory;
  search?: string;
};

export class Transaction {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Expose()
  id: string;

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
  @IsDateString()
  @IsNotEmpty()
  @Expose()
  createdAt: Date;

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Bank)
  @Expose()
  bank: Bank;
}
