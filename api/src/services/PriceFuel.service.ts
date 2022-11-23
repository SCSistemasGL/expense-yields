
import { PriceFuelEntity } from "../entity/PriceFuel.entity";
import { ProvinceAndPrice } from "../const/ProvinceAndPrice.const";
import { HttpError } from "routing-controllers";
import { ProvinceAndPriceBody } from "../dto's/ProvinceAndPrice.dto";


export const updatePriceFuelKm = async (fuel: ProvinceAndPriceBody) => {
  const isPriceFuel = await PriceFuelEntity.findBy({
    id: fuel.id,
  });
  if (!isPriceFuel[0]) throw new HttpError(404, "No existe provincia con ese nombre!");
  else {
    await PriceFuelEntity.update(
      { id: fuel.id },
      { priceKm: fuel.priceKm }
    );
    return { msg: "Precio Actualizado!" };
  }
};

export const loadNameProvince = async () => {
  for (let i = 0; i < ProvinceAndPrice.length; i++) {
    const loadProvice = new PriceFuelEntity();
    loadProvice.nameProvince = ProvinceAndPrice[i].name;
    loadProvice.priceKm = ProvinceAndPrice[i].price;
    await loadProvice.save();
  }
  return { msg: "Provincia creada con exitos" };
};

export const allPriceFuelProvince = async () => {
  const allFuel = await PriceFuelEntity.findBy({});
  if (!allFuel[0])
    throw new HttpError(404, "Error, no hay registros de precio del combustible");
  else {
    return allFuel;
  }
};

export const findProvinceWithPrice = async () => {
  const allFuel = await PriceFuelEntity.find({})
  const exitsPrice = allFuel.filter((province) => province.priceKm !== 0)
  if (!exitsPrice[0]) {
    throw new HttpError(404, "Error, no hay registros de precio del combustible");
  } else {
    return exitsPrice
  }
}

export const findeProvinceNotPrice = async () => {
  const allFuel = await PriceFuelEntity.findBy({});
  if (!allFuel[0])
    throw new HttpError(404, "Error, no hay registros de precio del combustible");
  else {
    const provinceNotPrice = allFuel.filter((province) => province.priceKm === 0)
    return provinceNotPrice
  }
}