import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FaEye, FaUserCircle } from "react-icons/fa";

// import { allTickets, newTicket } from "../../Redux/Actions/Ticket";
// import { validateNewTicket } from "../../Utils/validateTicket";
import "./NewRegister.css";
// import { lowerCaseString } from "../../Utils/lowerCase";
import ImageUpload from "../ImageUpload/ImageUpload";

import InputRegister from "../Input/InputRegister";
import { englishToSpanich } from "../../Utils/englishToSpanish";
import { column, props } from "../../Utils/const";

export default function NewRegister({ isRegister, registers }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.email);
  const [input, setInput] = useState({...props})

  const [errors, setErrors] = useState({
    description: "",
  });
  const [data, setData] = useState({
    description: "",
    image: null,
  });

  const handleChange = ({ target: { name, value } }) => {
    setInput((old) => ({ ...old, [name]: value }));
    setErrors({
      description: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const { description } = validateNewTicket(data);
    // if (description)
    //   setErrors((old) => ({
    //     ...old,
    //     description: description ? description : "",
    //   }));
    // else {
    //   var conf = window.confirm("Esta seguro que quiere crear el ticket?");

    //   if (conf) {
    //     const ticket = new FormData();
    //     ticket.append("name", user.name);
    //     ticket.append("email", user.email);
    //     ticket.append("file", data.image);
    //     ticket.append("description", data.description);
    //     const error = await dispatch(newTicket({ ticket, user }));
    //     if (error) {
    //       alert(error.data.msg);
    //     } else {
    //       alert("Ticket creado con éxitos!");
    //       isTicket();
    //     }
    //   } else {
    //     alert("El ticket no se creo!");
    //     isTicket();
    //   }
    // }
  };

  const handleImage = (e) => {
    if (!e) return setData((old) => ({ ...old, image: null }));
    const {
      target: { name, files },
    } = e;
    setData((old) => ({ ...old, [name]: files[0] }));
  };

  return (
    <form className="container" onSubmit={(e) => handleSubmit(e)}>
      <div className="title">
        <h1>Nuevo Registro de Rendicion</h1>
      </div>
      <label className="wrapper">
        <h4>Usuario:</h4>
        <div className={user}>
          {user}
        </div>
      </label>

      <label className="wrapper">
        {/* <InputRegister registers={registers}/> */}
        {column.map(({name, group}) => {
          if (englishToSpanich(name)) {
            return (
              <div className={`inputGroup ${group}`}>
                {englishToSpanich(name)} :
                <input
                  // pattern="[0-9]
                  // className={group}
                  pattern="[0-9]*"
                  type="number"
                  value={input[name]}
                  name={name}
                  onChange={(e) => handleChange(e)}
                  //   placeholder="Apellido..."
                  autoComplete="off"
                />
              </div>
            );
          }
        })}
      </label>

      <ImageUpload onChange={handleImage} />

      <button className="submit" type="submit">
        Crear Ticket
      </button>
    </form>
  );
}
