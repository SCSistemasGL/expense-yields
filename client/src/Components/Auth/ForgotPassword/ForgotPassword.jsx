import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { newPasswordUser } from "../../../Redux/Actions/Auth";

import style from "./NewTicket.module.css";

export default function ForotPassword({ handleLink }) {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    reason: "",
  });
  const [input, setInput] = useState({
    email: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setInput((old) => ({ ...old, [name]: value }));
    setErrors({
      reason: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var conf = window.confirm("Seguro que quieres hacer esta accion??");
    if (conf) {
      await dispatch(newPasswordUser(input));
      alert("Se envio el codigo para recuperar la contraseña al email!");
      handleLink({ login: "login" });
    } else {
      alert("No se envio el formulario");
      handleLink({ login: "login" });
    }
  };

  return (
    <form className={style.container} onSubmit={(e) => handleSubmit(e)}>
      <div className={style.title}>
        <h1>Recuperar Contraseña</h1>
      </div>

      <label className={style.wrapper}>
        PARA RECUPERAR LA CONTRASEÑA INTRODUZCA SU EMAIL:
        <div
          className={`${style.inputGroup} ${errors.reason ? style.error : ""} `}
        ></div>
        <label>
          <h3>Email</h3>
          <div
            className={`${style.inputGroup} ${
              errors.email ? style.error : ""
            } `}
          >
            <FaUserCircle />
            <input
              type="text"
              name="email"
              onChange={(e) => handleChange(e)}
              placeholder="Enter email"
              autoComplete="off"
            />
          </div>
        </label>
      </label>

      <button className={style.submit} type="submit">
        Enviar
      </button>
    </form>
  );
}
