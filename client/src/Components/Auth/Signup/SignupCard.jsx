import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaUserCircle, FaKey, FaEye } from "react-icons/fa";
import Select from "react-select";
import { signup } from "../../../Redux/Actions/Auth";
import { validateSignup } from "../../../Utils/validate";

import style from "./SignupCard.module.css";
import optionSelectRol from "../../../Utils/optionRol";

export default function SigupCard({ handleLink, handleAuth }) {
  const dispatch = useDispatch();
  const [keyOn, setKeyOn] = useState(false);

  const [optionRol, setOptionRol] = useState([]);

  useEffect(() => {
    setOptionRol(optionSelectRol());
  }, []);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    code: "",
  });

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors("");
  };

  const handleRol = (e) => {
    setInput((old) => ({ ...old, role: e.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, lastName, role } =
      validateSignup(input);
    if (email || password || firstName || lastName) {
      setErrors((old) => ({
        ...old,
        firstName: firstName ? firstName : "",
        lastName: lastName ? lastName : "",
        email: email ? email : "",
        password: password ? password : "",
        role: role ? role : "",
      }));
    } else {
      var conf = window.confirm("Esta seguro que quiere crear el usuario?");
      if (conf) {
        const code = await dispatch(signup(input));
        if (!code) {
          alert("Usuario creado con éxito!");
          handleLink({ login: "login" });
        } else {
          setErrors((old) => ({
            ...old,
            code: code.error,
          }));
        }
      } else {
        alert("Usuario NO CREADO!");
        handleLink({ login: "login" });
      }
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>- Registrarse -</h1>
        <label>
          <h5>Nombre:</h5>
          <div
            className={`${style.inputGroup} ${
              errors.firstName ? style.error : ""
            } `}
          >
            <FaUserCircle />
            <input
              pattern="[a-zA-Z]+"
              type="text"
              value={input.firstName}
              name="firstName"
              onChange={(e) => handleChange(e)}
              placeholder="Nombre..."
              autoComplete="off"
            />
          </div>
        </label>
        <div>
          {errors.firstName ? (
            <span className={style.errorSpan}>{errors.firstName}</span>
          ) : (
            ""
          )}
        </div>
        <label>
          <h5>Apellido:</h5>
          <div
            className={`${style.inputGroup} ${
              errors.lastName ? style.error : ""
            } `}
          >
            <FaUserCircle />
            <input
              pattern="[a-zA-Z]+"
              type="text"
              value={input.lastName}
              name="lastName"
              onChange={(e) => handleChange(e)}
              placeholder="Apellido..."
              autoComplete="off"
            />
          </div>
        </label>
        <div>
          {errors.lastName ? (
            <span className={style.errorSpan}>{errors.lastName}</span>
          ) : (
            ""
          )}
        </div>

        <label>
          <h5>Email:</h5>
          <div
            className={`${style.inputGroup} ${
              errors.email ? style.error : ""
            } `}
          >
            <FaUserCircle />
            <input
              type="email"
              value={input.email}
              name="email"
              onChange={(e) => handleChange(e)}
              placeholder="Email..."
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
          <h5>Contraseña:</h5>
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
              placeholder="Contraseña..."
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
        <label>
          <h5>Rol:</h5>
          <div>
            <Select
              onChange={(e) => handleRol(e)}
              options={optionRol}
              placeholder="Roles..."
            />
          </div>
        </label>
        <div>
          {errors.role ? (
            <span className={style.errorSpan}>{errors.role}</span>
          ) : (
            ""
          )}
        </div>
        <div className={style.buttonContainer}>
          <button type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
}
