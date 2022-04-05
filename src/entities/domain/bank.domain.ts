import { Expose, Type } from "class-transformer";
import {
  IsDate,
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  ValidateNested,
} from "class-validator";
import { User } from "./user.domain";

export class Bank {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Expose()
  id: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Expose()
  name: string;

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => User)
  @Expose()
  user: User;

  @IsDefined()
  @IsDate()
  @IsNotEmpty()
  @Expose()
  createdAt: Date;
}
