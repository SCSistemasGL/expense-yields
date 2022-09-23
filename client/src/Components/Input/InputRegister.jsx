import React from "react";
import { englishToSpanich } from "../../Utils/englishToSpanish";

const column = [
  "auto",
  " remis",
  " moto",
  "parking",
  "housing",
  "breakfast",
  "lunch",
  "dinner",
  "tip",
  "bookstore",
  "seamstress",
  "encomienda",
  "correo",
  "supermarket",
  "cleaning",
  "other",
  "previousBalance",
  "advancePayment",
  "reintegrationServicom",
  "reintegrationUser",
  "totalSpent",
];

export default function InputRegister() {
  return (
    <div>
      {column.map((e) => {
        if (englishToSpanich(e.name)) {
          return (
            <div>
              {englishToSpanich(e.name)} :
              <input
                pattern="[0-9]*"
                type="number"
                name={e.name}
                autoComplete="off"
              />
            </div>
          );
        }
      })}
    </div>
  );
}
