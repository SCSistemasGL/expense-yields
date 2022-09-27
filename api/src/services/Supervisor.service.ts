import { IPriceFuel } from "../utils/type";
import { PriceFuelEntity } from "../entity/PriceFuel.entity";

const Province = [
  { name: "BuenosAires", price: 0 },
  { name: "Catamarca", price: 0 },
  { name: "Chaco", price: 0 },
  { name: "Chubut", price: 0 },
  { name: "Córdoba", price: 0 },
  { name: "Corrientes", price: 0 },
  { name: "EntreRíos", price: 0 },
  { name: "Formosa", price: 0 },
  { name: "Jujuy", price: 0 },
  { name: "LaPampa", price: 0 },
  { name: "LaRioja", price: 0 },
  { name: "Mendoza", price: 0 },
  { name: "Misiones", price: 0 },
  { name: "Neuquén", price: 0 },
  { name: "RíoNegro", price: 0 },
  { name: "Salta", price: 0 },
  { name: "SanJuan", price: 0 },
  { name: "SanLuis", price: 0 },
  { name: "SantaCruz", price: 0 },
  { name: "SantaFe", price: 0 },
  { name: "SantiagoDelEstero", price: 0 },
  { name: "TierraDelFuego", price: 0 },
  { name: "Tucumán", price: 0 },
];

export const newPriceFuelKm = async (fuel: IPriceFuel) => {
  const isPriceFuel = await PriceFuelEntity.findBy({
    nameProvince: fuel.nameProvince,
  });
  if (!isPriceFuel[0]) throw new Error("No existe provincia con ese nombre!");
  else {
    await PriceFuelEntity.update(
      { nameProvince: fuel.nameProvince },
      { priceKm: fuel.priceKm }
    );
    return { msg: "Precio guardado!" };
  }
};

export const loadNameProvince = async () => {
  for (let i = 0; i < Province.length; i++) {
    const loadProvice = new PriceFuelEntity();
    loadProvice.nameProvince = Province[i].name;
    loadProvice.priceKm = Province[i].price;
    await loadProvice.save();
  }
  return { msg: "Provincia creada con exitos" };
};

export const allPriceFuelProvince = async () => {
  const allFuel = await PriceFuelEntity.findBy({});
  if (!allFuel[0])
    throw new Error("Error, no hay registros de precio del combustible");
  else {
    return allFuel;
  }
};
