import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UserRole } from "../const/Enum.const";

export class accountBody {
  @IsString()
  @IsNotEmpty()
  firstName: string;
  
  @IsString()
  @IsNotEmpty()
  lastName: string;
  
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsEnum(UserRole)
  role: UserRole;
  
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
  
  
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class updateAccountBody{
  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}