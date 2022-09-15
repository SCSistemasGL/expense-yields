import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle, FaKey, FaEye } from "react-icons/fa";

import { signup } from "../../../Redux/Actions/Auth";
// import { validateSignup } from "../../../Utils/validate";

import style from "./SignupCard.module.css";

export default function SigupCard({ isAuth }) {
  const dispatch = useDispatch();
  const [keyOn, setKeyOn] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const { name, email, password, last_name } =
    //   validateSignup(input);
    // if (email || password ||  name || last_name) {
    //   setErrors((old) => ({
    //     ...old,
    //     name: name ? name : "",
    //     last_name: last_name ? last_name : "",
    //     email: email ? email : "",
    //     password: password ? password : "",
    //   }));
    // } else {
      var conf = window.confirm("Esta seguro que quiere crear el usuario?");
      if(conf){
        const code = await dispatch(signup(input));
        if (!code) {
        alert('Usuario creado con éxito!')
        isAuth()
        } else {
          setErrors((old) => ({
            ...old,
            code: code.error,
          }));
        }
      }else{
        alert("Usuario NO CREADO!")
        isAuth()
      }
    // }
    
  };

  return (
    <div className={style.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>- Registrarse -</h1>
        <label>
          <h5>Nombre:</h5>
          <div
            className={`${style.inputGroup} ${errors.name ? style.error : ""} `}
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
          {errors.name ? (
            <span className={style.errorSpan}>{errors.name}</span>
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
            <span className={style.errorSpan}>{errors.last_name}</span>
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
          <div
            className={`${style.inputGroup} ${
              errors.role ? style.error : ""
            } `}
          >
            <FaUserCircle />
            <input
              type="tex"
              value={input.role}
              name="role"
              onChange={(e) => handleChange(e)}
              placeholder="Rol: Admin | Supervisor | Tesorero | User..."
              autoComplete="off"
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
          <button type="submit">SigUp</button>
        </div>
      </form>
    </div>
  );
}
