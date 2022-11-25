import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgotPasswordAccount } from "../../../Redux/Actions/Account";
import { newPasswordUser } from "../../../Redux/Actions/Auth";

import style from "./ForgotPasswordAccountCard.module.css";

export default function ForgotPasswordAccountCard({ handleLink }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errors, setErrors] = useState("");
  const [input, setInput] = useState({
    email: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setInput((old) => ({ ...old, [name]: value }));
    setErrors("");
  };

  const handleLogin = () => {
    navigate("/auth/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.email) {
      setErrors("Error, debe proporcionar un email!");
    } else {
      var conf = window.confirm("Seguro que quieres hacer esta accion??");
      if (conf) {
        await dispatch(forgotPasswordAccount(input));
        alert("Se envio el codigo para recuperar la contraseña al email!");
        navigate("/auth/login");
      } else {
        alert("No se envio el formulario");
        navigate("/auth/login");
      }
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
          className={`${style.inputGroup} ${errors ? style.error : ""} `}
        ></div>
        <label>
          <h3>Email</h3>
          <div className={`${style.inputGroup} ${errors ? style.error : ""} `}>
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
      <div>
        {errors ? <span className={style.errorSpan}>{errors}</span> : ""}
      </div>
      <button className={style.submit} type="submit">
        Enviar
      </button>
      <button className={style.submit} onClick={handleLogin} type="submit">
        Login
      </button>
    </form>
  );
}
