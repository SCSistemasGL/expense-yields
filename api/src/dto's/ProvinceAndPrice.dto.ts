import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProvinceAndPriceBody{
  @IsNumber()
  @IsNotEmpty()
  id!: number;

  @IsNumber()
  @IsNotEmpty()
  priceKm!: number
}