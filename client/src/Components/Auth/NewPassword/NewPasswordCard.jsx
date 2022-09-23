import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaUserCircle, FaKey, FaEye } from "react-icons/fa";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

import { validateLogin } from "../../../Utils/validate";

import style from "./NewPasswordCard.module.css";
import { newPasswordUser } from "../../../Redux/Actions/Auth";

export default function NewPasswordCard({ handleLink }) {
  const dispatch = useDispatch();
  const [keyOn, setKeyOn] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    code: "",
    codeRes: "",
  });
  const [input, setInput] = useState({
    email: "",
    code: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors("");
  };

  const handleSubmit = async () => {
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
      var conf = window.confirm("Seguro que quieres hacer esta accion??");
      if (conf) {
      const codeRes = await dispatch(newPasswordUser(input));
      if (!codeRes) {
        alert("Cuenta habilitada!");
        handleLink({ login: "login" });
      } else {
        setErrors((old) => ({
          ...old,
          codeRes: codeRes.error,
        }));
      }}else{
        alert("No se cambio su contraseña")
        handleLink({ login: "login" });

      }
    }
  };

  return (
    <div className={style.container}>
      <form>
        <h1>- NUEVA CONTRASEÑA -</h1>
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
              placeholder="Ingrese email..."
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
          <h3>Código</h3>
          <div
            className={`${style.inputGroup} ${errors.code ? style.error : ""} `}
          >
            <BsFillChatSquareDotsFill />
            <input
              type="text"
              value={input.code}
              name="code"
              onChange={(e) => handleChange(e)}
              placeholder="Ingrese código..."
              autoComplete="off"
            />
          </div>
        </label>
        <div>
          {errors.code ? (
            <span className={style.errorSpan}>{errors.code}</span>
          ) : (
            ""
          )}
        </div>
        <label>
          <h3>Password</h3>
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
              placeholder="Ingrese contraseña..."
            />
            <FaEye
              className={style.keyEye}
              onClick={(e) => {
                setKeyOn((old) => !old);
              }}
            />
          </div>
        </label>
        <div>
          {errors.password ? (
            <span className={style.errorSpan}>{errors.password}</span>
          ) : (
            ""
          )}
        </div>
        <div>
          {errors.codeRes ? (
            <span className={style.errorSpan}>{errors.codeRes}</span>
          ) : (
            ""
          )}
        </div>
        <div className={style.buttonContainer}>
          <button type="submit" onClick={handleSubmit}>
            Enviar Contraseña
          </button>
        </div>
      </form>
    </div>
  );
}
