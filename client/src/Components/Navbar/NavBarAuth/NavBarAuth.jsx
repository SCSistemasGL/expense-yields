import React from "react";
import { FiLogIn } from "react-icons/fi";
import { MdOutlineHowToReg } from "react-icons/md";

import style from "./NavBarAuth.module.css";

export default function NavBarAuth({ handleLink, active }) {
  return (
    <nav className={style.nav}>
      <div className={`${style.navItems} ${active.login ? style.active : ""}`}>
        <FiLogIn
          onClick={() => handleLink({ login: "login" })}
          className={style.icon}
          title="Login"
        />
      </div>
      <div
        className={`${style.navItems} ${
          active.newPassword ? style.active : ""
        }`}
      >
        <MdOutlineHowToReg
          onClick={() => handleLink({ newPassword: "newPassword" })}
          className={style.icon}
          title="Habilitar Cuenta / Contraseña"
        />
      </div>
    </nav>
  );
}
