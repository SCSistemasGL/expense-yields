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
import { column, nameGroup, props } from "../../Utils/const";
import { createNewRegister } from "../../Redux/Actions/Register";

export default function NewRegister({ isRegister, registers }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.email);
  const [input, setInput] = useState({ ...props, image: null });

  const [errors, setErrors] = useState({
    description: "",
  });
  const [image, setImage] = useState({
    image: null,
  });

  const handleChange = ({ target: { name, value } }) => {
    setInput((old) => ({ ...old, [name]: parseInt(value) }));
    setErrors({
      description: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input.image)
    const register = new FormData();
    register.append("image", input.image)
    await dispatch(createNewRegister(register))
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
    // e.target.files[0])
    // if (!e) return setInput((old) => ({ ...old, image: null }));
    const {
      target: { name, files },
    } = e;
    setInput((old) => ({ ...old, [name]: files[0] }));
  };

  const inputGroup = (indexGroup) => {
    return column.map(({ name, group }, index) => {
      if (englishToSpanich(name) && group === indexGroup) {
        return (
          <div className="wrapper_input" key={index}>
            {englishToSpanich(name)} :
            <input
              // pattern="[0-9]

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
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {/* <div className="title">
        <h1>Nuevo Registro de Rendicion</h1>
      </div> */}
      {/* <label className="wrapper">
        <h4>Usuario:</h4>
        <div className={user}>
          {user}
        </div>
      </label> */}

      <div className="wrapper">
        {/* <InputRegister registers={registers}/> */}
        {nameGroup.map(({ group }, index) => {
          return <div className={group} key={index}>{inputGroup(group)} </div>;
        })}
        <div className="footer">

        
      <input
        onChange={handleImage}
        name="image"
        type="file"
        placeholder="Image"
      />
        <button className="submit" type="submit">
          Crear Ticket
        </button>
        </div>
      </div>
    </form>
  );
}
