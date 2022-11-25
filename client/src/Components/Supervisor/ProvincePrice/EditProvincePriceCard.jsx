import React, { useState } from "react";
import { useDispatch } from "react-redux";

import style from "./EditProvincePriceCard.module.css";

import { updateProvincePrice } from "../../../Redux/Actions/Supervisor";
import { nameSpace } from "../../../Utils/name.utils";

export default function EditProvincePriceCard({ data, isUpdatePrice }) {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    priceKm: "",
  });
  const [input, setInput] = useState({
    priceKm: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setInput((old) => ({ ...old, [name]: value }));
    setErrors({
      priceKm: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.priceKm === 0)
      setErrors((old) => ({
        ...old,
        priceKm: "Error, debe colocar un precio!",
      }));
    else {
      var conf = window.confirm("Seguro quiere cambiar el precio?");
      if (conf) {
        const updatePrice = {
          id: data.id,
          priceKm: parseFloat(input.priceKm),
        };
        await dispatch(updateProvincePrice(updatePrice));
        alert("Precio cambiado con éxitos!");
      }
    }
    isUpdatePrice();
  };

  return (
    <div className={style.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>- PRECIO POR KM -</h1>
        <label>
          <h2>Provincia:</h2>
          <div className={style.inputGroup}>
            <span>{nameSpace(data.nameProvince)}</span>
          </div>
        </label>
        <label>
          <h2>Precio Actual:</h2>
          <div className={style.inputGroup}>
            <span>$ {data.priceKm}</span>
          </div>
        </label>
        <div>
          <label>
            <h2>Precio por km:</h2>
            <div className={style.inputGroup}>
              <input
                type="number"
                value={input.priceKm}
                name="priceKm"
                onChange={(e) => handleChange(e)}
                placeholder="Precio por km"
              />
            </div>
          </label>
          <div>
            {errors.priceKm ? (
              <span className={style.errorSpan}>{errors.priceKm}</span>
            ) : (
              ""
            )}
          </div>
        </div>
        {input.priceKm ? (
          <div className={style.buttonContainer}>
            <button type="submit">Agregar Precio</button>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
