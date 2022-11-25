import Select from "react-select";
import { useDispatch } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import React, { useEffect, useState } from "react";

import { validateSignup } from "../../../Utils/validate";

import style from "./NewAccountCard.module.css";
import optionSelectRol from "../../../Utils/optionRol";
import { newAccountNotPassword } from "../../../Redux/Actions/Account";

export default function NewAccountCard({ isNewAccount, handleAuth }) {
  const dispatch = useDispatch();
  const [optionRol, setOptionRol] = useState([]);

  useEffect(() => {
    setOptionRol(optionSelectRol());
  }, []);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    code: "",
  });

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
    const { firstName, email, lastName, role } = validateSignup(input);
    if (email || firstName || lastName) {
      setErrors((old) => ({
        ...old,
        firstName: firstName ? firstName : "",
        lastName: lastName ? lastName : "",
        email: email ? email : "",
        role: role ? role : "",
      }));
    } else {
      var conf = window.confirm("Esta seguro que quiere crear el usuario?");
      if (conf) {
        const code = await dispatch(newAccountNotPassword(input));
        if (!code) {
          alert("Usuario creado con éxito!");
          isNewAccount();
        } else {
          setErrors((old) => ({
            ...old,
            code: code.error,
          }));
        }
      } else {
        alert("Usuario NO CREADO!");
        isNewAccount();
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
