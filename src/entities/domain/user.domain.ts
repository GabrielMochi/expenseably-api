import { Expose } from "class-transformer";
import { IsDate, IsDefined, IsNotEmpty, IsString } from "class-validator";

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
  @IsDate()
  @IsNotEmpty()
  @Expose()
  createdAt: Date;
}
