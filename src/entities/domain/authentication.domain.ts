import { Expose } from "class-transformer";
import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class Authentication {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Expose()
  username: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Expose()
  password: string;
}
