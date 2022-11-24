import Select from "react-select";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./NewProvincePriceCard.module.css";

import { updateProvincePrice } from "../../../Redux/Actions/Supervisor";
import { selectOptionProvince } from "../../../Utils/select.utils";

export default function NewProvincePriceCard({ isPrice }) {
  const dispatch = useDispatch();

  const provinceNotPrice = useSelector(
    (state) => state.supervisor.provinceNotPrice
  );

  const [optionProvince, setOptionProvince] = useState([]);

  const [errors, setErrors] = useState({
    id: 0,
    priceKm: "",
    code: "",
  });

  const [input, setInput] = useState({
    id: 0,
    priceKm: "",
  });

  useEffect(() => {
    setOptionProvince(selectOptionProvince(provinceNotPrice));
  }, []);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: parseFloat(e.target.value),
    });
    setErrors("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.priceKm === "") {
      setErrors((old) => ({
        ...old,
        priceKm: "Error, debe poner un precio!",
      }));
    } else {
      var conf = window.confirm("Estas seguro que quiere agregar el precio?");
      if (conf) {
        const code = await dispatch(updateProvincePrice(input));
        if (!code) {
          alert("Precio cargado con éxito!");
          isPrice();
        } else {
          setErrors((old) => ({
            ...old,
            code: code.error,
          }));
        }
      } else {
        alert("El precio NO fue cargado!");
        isPrice();
      }
    }
  };

  const handleSelectDepartament = async (e) => {
    setInput((old) => ({
      ...old,
      id: e.value,
    }));
  };

  return (
    <div className={style.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>- PRECIO POR KM -</h1>
        <label>
          <h2>Provincia:</h2>
          <label>
            <Select
              onChange={(e) => handleSelectDepartament(e)}
              options={optionProvince}
              placeholder="Provincia..."
              dropdownIndicator
            />
          </label>
        </label>
        {input.id !== 0 ? (
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
        ) : (
          ""
        )}
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
