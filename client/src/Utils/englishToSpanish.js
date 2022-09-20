const column = {
  auto: "AUTO",
  remis: "REMIS",
  moto: "MOTO",
  fuel:"COMBUSTIBLE",
  parking: "ESTACIONAMIENTO",
  housing: "HOSPEDAJE",
  breakfast: "DESAYUNO",
  lunch: "ALMUERZO",
  dinner: "CENA",
  tip: "PROPINA",
  bookstore: "LIBRERIA",
  seamstress: "COSTURERA",
  encomienda: "ENCOMIENDA",
  correo: "CORREO",
  supermarket: "SUPERMERCADO",
  cleaning: "LIMPIEZA",
  other: "OTROS",
  previousBalance: "SALDO ANTERIOR",
  advancePayment: "ANTICIPO",
  reintegrationServicom: "REITEGRAR A SERVICOM",
  reintegrationUser: "REITEGRAR A USUARIO",
  totalSpent: "TOTAL GASTOS",
};

export const englishToSpanich = (string) => {
  if (column.hasOwnProperty(string)) {
    return column[string];
  }
  return false;
};
