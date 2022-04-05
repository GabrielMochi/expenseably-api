import { Expose } from "class-transformer";
import { IsDateString, IsDefined, IsNotEmpty, IsString } from "class-validator";

export class User {
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
  @IsString()
  @IsNotEmpty()
  @Expose()
  email: string;

  @IsDefined()
  @IsDateString()
  @IsNotEmpty()
  @Expose()
  createdAt: Date;
}
