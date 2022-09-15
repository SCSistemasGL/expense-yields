/*  This checks whether the parameters exist or are missing in the request body. */

export const parseString = (dataFromRequest: any, string: string): string => {
  if (!isString(dataFromRequest)) {
    throw new Error(`Tipo de dato incorrecto o no se proporciono esta prop ${string}`);
  }
  let letters = "";

  if (string === "firsName" || string === "lastName") {
    letters = "abcdefghijklmnñopqrstuvwxyz";
  } else {
    letters =
      'abcdefghijklmnñopqrstuvwxyz0123456789!_?@/-.%^&*()"£$[]{}#~:;,áéíóú ';
  }

  if (dataFromRequest.length === 0) {
    throw new Error(`Error, esta prop no puede ser vacia, ${string}`);
  }

  if (dataFromRequest.length < 4) {
    throw new Error(
      `Error, ${string} demasiado corto, debe tener al menos 4 caracteres `
    );
  }

  for (let i = 0; i < dataFromRequest.length; i++) {
    if (!letters.includes(dataFromRequest[i].toLowerCase())) {
      throw new Error(`Solo letras, ${string}`);
    }
  }

  return dataFromRequest;
};

const isString = (string: any): boolean => {
  return typeof string === "string" || string instanceof String;
};

const isBoolean = (boolean: any): boolean => {
  return typeof boolean === "boolean";
};

export const parseBoolean = (
  dataFromRequest: any,
  boolean: string
): boolean => {
  if (!isBoolean(dataFromRequest)) {
    throw new Error(`Tipo de dato incorrecto o no se proporciono esta prop ${boolean}`);
  }
  return dataFromRequest;
};

/**
 * Function that validates the numbers of the parameters,
 * whether they are just numbers, as well as their length.
 */
export const parseNumber = (dataFromRequest: any, string: string): string => {
  const numberLength = ["idCustomer", "phoneNumber", "creditCard"];
  if (!isString(dataFromRequest)) {
    throw new Error(`Tipo de dato incorrecto o no se proporciono esta prop ${string}`);
  }
  let letters = "1234567890";

  for (let i = 0; i < dataFromRequest.length; i++) {
    if (!letters.includes(dataFromRequest[i])) {
      throw new Error(`Solo numeros , ${string}`);
    }
  }
//   if (numberLength.includes(string) && dataFromRequest.length < 8) {
//     if (string === "idCustomer") {
//       throw new Error(
//         "Error, idCustomer too short, must be more than 8 characters long"
//       );
//     } else {
//       throw new Error(
//         `Error, ${string} too short, must be more than 8 characters long`
//       );
//     }
//   }
  return dataFromRequest;
};