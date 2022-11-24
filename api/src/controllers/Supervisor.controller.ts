import { Body, Get, JsonController, Post, Put } from "routing-controllers";

import { allPriceFuelProvince, findeProvinceNotPrice, findProvinceWithPrice, loadNameProvince, updatePriceFuelKm } from "../services/PriceFuel.service";
import { ProvinceAndPriceBody } from "../dto's/ProvinceAndPrice.dto";

@JsonController('/supervisor')
export class SupervisorController {
  @Put('/price')
  async createPriceFuel(@Body() body: ProvinceAndPriceBody) {
    return await updatePriceFuelKm(body);
  };

  @Post('/upload')
  async uploadProvinceAndPrice() {
    return await loadNameProvince();
  };

  @Get('/allPrice')
  async allProvinceFuel() {
    return await allPriceFuelProvince();
  };

  @Get('/provinceWithPrice')
  async getProvinceWithPrice() {
    return await findProvinceWithPrice()
  }

  @Get('/provinceNotPrice')
  async getProvinceNotPrice() {
    return await findeProvinceNotPrice()
  }
};
