import React from "react";
import { useNavigate } from "react-router-dom";

import style from "./NavBarTools.module.css";
import {
  IoBusiness,
  IoFileTrayStackedOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdAddBusiness, MdAdminPanelSettings } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { FaUserEdit, FaUserPlus } from "react-icons/fa";

import { FiTool } from "react-icons/fi";

export default function NavBarTools({ handleLink, active }) {

  return (
    <nav className={style.nav}>
            
        <div>
        <div
          className={`${style.navItems}  ${style.navName } ${active.provincePriceAdd ? style.active : ""}`}
           onClick={() => handleLink({ provincePriceAdd: "provincePriceAdd" })}>
          COMBUSTIBLE 
          <MdAddBusiness
          className={style.icon}
          title="Agregar precio por kilometro"
        />
        </div>     
      </div>
      <div>
        <div
          className={`${style.navItems}  ${style.navName } ${active.userAdd ? style.active : ""}`}
          onClick={() => handleLink({ userAdd: "userAdd" })}>
           USUSARIOS  
          <FaUserPlus
          className={style.icon}
          title="Agregar Usuario"
        />
        </div>
      </div>
      

      <div>
        <div
          className={`${style.navItems}  ${style.navName } ${active.new1 ? style.active : ""}`}
          onClick={() => handleLink({ new1: "new1" })}>
          NUEVO ITEM 
          <IoFileTrayStackedOutline
          className={style.icon}
          title="Nuevo Item"
        />
        </div>     
      </div>
     
      <div>
        <div
          className={`${style.navItems}  ${style.navName } ${active.new2 ? style.active : ""}`}
          onClick={() => handleLink({ new2: "new2" })}>
          NUEVO ITEM 
          <IoFileTrayStackedOutline
          className={style.icon}
          title="Nuevo Item"
        />
        </div>     
      </div>
      <div>
        <div
          className={`${style.navItems}  ${style.navName } ${active.new3 ? style.active : ""}`}
          onClick={() => handleLink({ new3: "new3" })}>
          NUEVO ITEM 
          <IoFileTrayStackedOutline
          className={style.icon}
          title="Nuevo Item"
        />
        </div>     
      </div>
    </nav>
  );
}
