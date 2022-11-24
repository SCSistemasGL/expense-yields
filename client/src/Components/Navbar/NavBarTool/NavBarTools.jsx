import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { CgUserList } from "react-icons/cg";
import { MdAddBusiness } from "react-icons/md";
import { IoFileTrayStackedOutline } from "react-icons/io5";

import style from "./NavBarTools.module.css";

export default function NavBarTools({ handleLink, active }) {
  return (
    <nav className={style.nav}>
      <div>
        <div
          className={`${style.navItems}  ${style.navName} ${
            active.tableProvincePrice ? style.active : ""
          }`}
          title="Lista de Precios"
          onClick={() =>
            handleLink({ tableProvincePrice: "tableProvincePrice" })
          }
        >
          COMBUSTIBLE
          <MdAddBusiness className={style.icon} />
        </div>
      </div>

      <div>
        <div
          className={`${style.navItems}  ${style.navName} ${
            active.accountAdd ? style.active : ""
          }`}
          title="Agregar Cuenta"
          onClick={() => handleLink({ accountAdd: "accountAdd" })}
        >
          CUENTA
          <FaUserPlus className={style.icon} />
        </div>
      </div>

      <div>
        <div
          className={`${style.navItems}  ${style.navName} ${
            active.tableAccounts ? style.active : ""
          }`}
          title="Lista de Cuentas"
          onClick={() => handleLink({ tableAccounts: "tableAccounts" })}
        >
          LISTA
          <CgUserList className={style.icon} />
        </div>
      </div>

      <div>
        <div
          className={`${style.navItems}  ${style.navName} ${
            active.new1 ? style.active : ""
          }`}
          onClick={() => handleLink({ new1: "new1" })}
        >
          NUEVO ITEM
          <IoFileTrayStackedOutline className={style.icon} title="Nuevo Item" />
        </div>
      </div>

      <div>
        <div
          className={`${style.navItems}  ${style.navName} ${
            active.new2 ? style.active : ""
          }`}
          onClick={() => handleLink({ new2: "new2" })}
        >
          NUEVO ITEM
          <IoFileTrayStackedOutline className={style.icon} title="Nuevo Item" />
        </div>
      </div>
      <div>
        <div
          className={`${style.navItems}  ${style.navName} ${
            active.new3 ? style.active : ""
          }`}
          onClick={() => handleLink({ new3: "new3" })}
        >
          NUEVO ITEM
          <IoFileTrayStackedOutline className={style.icon} title="Nuevo Item" />
        </div>
      </div>
    </nav>
  );
}
