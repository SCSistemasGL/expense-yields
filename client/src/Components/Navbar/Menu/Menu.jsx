import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BiHomeAlt, BiUserPin } from "react-icons/bi";

import styles from "./Menu.module.css";

export default function Menu({ column, home, tool, notification, maintenance, chart }) {
  const path = useLocation().pathname;

  return (
    <ul className={`${styles.menu} ${column ? styles.column : ""}`}>
      {home ? (
        <li>
          <NavLink
            title="Home"
            className={`${styles.menu__link} ${
              path === "/home" ? styles.active : ""
            }`}
            to='/home'
          >
            <BiHomeAlt className={styles.icon} />
          </NavLink>
        </li>
      ) : (
        <></>
      )}
       {notification ? (
        <li>
          <NavLink
            title="Notification"
            className={`${styles.menu__link} ${
              path === "/notification" ? styles.active : ""
            }`}
            to="/home"
          >
            <BiUserPin className={styles.icon} />
          </NavLink>
        </li>
      ) : (
        <></>
      )}
    </ul>
  );
}
