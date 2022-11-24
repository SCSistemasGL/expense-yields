import React, { useState } from "react";
import { useDispatch } from "react-redux";

import style from "./EditProvincePriceCard.module.css";

import { updateProvincePrice } from "../../../Redux/Actions/Supervisor";

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
    <div className={style.container} key={data.id}>
      <div className={style.title}>
        <h2>CAMBIAR PRECIO POR KM</h2>
      </div>
      <div className={style.data}>
        <h4>PROVINCIA:</h4>
        <div>{data.nameProvince}</div>
        <h4>PRECIO ACTUAL:</h4>
        <div>$ {data.priceKm}</div>
      </div>
      {/* {data.feedback == "false" ? (
        <div>
          <div className={style.data}>
            <h4>Classification:</h4>
            <div>{data.classification}</div>
            <h4>Assigned Technician:</h4>
            <div>
              {!data.assigned_technician || data.assigned_technician == "false"
                ? "Unassigned at the moment"
                : data.assigned_technician}
            </div>
          </div>
          <div className={style.buttonContainer}>
            <button type="submit" onClick={handleCancel}>
              Cancel Ticket
            </button>
          </div>
        </div>
      ) : ( */}
      <div className={style.data}>
        <h4>NUEVO PRECIO</h4>
        <div
          className={`${style.inputGroup} ${
            errors.precioKm ? style.error : ""
          } `}
        >
          <input
            type="number"
            value={input.priceKm}
            name="priceKm"
            onChange={(e) => handleChange(e)}
            placeholder="Precio por km"
          />
        </div>
        {errors.priceKm ? (
          <span className={style.errorSpan}>{errors.priceKm}</span>
        ) : (
          ""
        )}

        <button className={style.submit} onClick={handleSubmit}>
          Send
        </button>
      </div>
    </div>
  );
}
