import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaUserCircle, FaKey, FaEye } from "react-icons/fa";

import { login } from "../../../Redux/Actions/Auth";
import { validateLogin } from "../../../Utils/validate";

import style from "./LoginCard.module.css";


export default function LoginCard({ handleAuth, handleLink }) {
  const dispatch = useDispatch();
  const [keyOn, setKeyOn] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    code: "",
  });
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = validateLogin(input);
    if (email || password) {
      setErrors((old) => ({
        ...old,
        email: email ? email : "",
        password: password ? password : "",
      }));
      email
        ? setInput({ email: "", password: "" })
        : setInput((old) => ({
            ...old,
            password: "",
          }));
    } else {
      const code = await dispatch(login(input));
      if (!code) {
        handleAuth();
      } else {
        setErrors((old) => ({
          ...old,
          code: code.error,
        }));
      }
    }
  };

  const handleForgotPassword = () => {
    handleLink({forgotPassword:"forgotPassword"})
  };
    const handleNewPassword = () => {
    handleLink({newPassword:"newPassword"})
  };
  return (
    <div className={style.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>- INICIAR SESION -</h1>
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
              value={input.email}
              name="email"
              onChange={(e) => handleChange(e)}
              placeholder="Ingrese email"
              autoComplete="off"
            />
          </div>
        </label>
        <div>
          {errors.email ? (
            <span className={style.errorSpan}>{errors.email}</span>
          ) : (
            ""
          )}
        </div>
        <label>
          <h3>Contraseña</h3>
          <div
            className={`${style.inputGroupPass} ${
              errors.password ? style.error : ""
            } `}
          >
            <FaKey />
            <input
              type={keyOn ? "text" : "password"}
              value={input.password}
              name="password"
              onChange={(e) => handleChange(e)}
              placeholder="Ingrese contraseña"
            />
            <FaEye
              className={style.keyEye}
              onClick={(e) => {
                setKeyOn((old) => !old);
              }}
            />
          </div>
        </label>
        <button
          className={style.btnSimple}
          onClick={() => {
            handleForgotPassword();
          }}
        >
          Olvidaste la contraseña?
        </button>
        <div>
          {errors.password ? (
            <span className={style.errorSpan}>{errors.password}</span>
          ) : (
            ""
          )}
        </div>
        <div>
          {errors.code ? (
            <span className={style.errorSpan}>{errors.code}</span>
          ) : (
            ""
          )}
        </div>
        <div className={style.buttonContainer}>
          <button type="submit">Iniciar Sesion</button>
        </div>
          <div className={style.buttonContainer}>
          <button type="submit" onClick={handleNewPassword}>Recuperar Contraseña</button>
        </div>
      </form>
    </div>
  );
}
