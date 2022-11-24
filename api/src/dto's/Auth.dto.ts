import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class loginBody {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class forgotPasswordBody {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}