import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiLogIn, FiLogOut } from "react-icons/fi";

import Menu from "./Menu/Menu";
import logo from "../../images/Logo.png"
import { logout } from "../../Redux/Actions/Auth";


import styles from "./NavBar.module.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const session = useSelector((store) => store.auth.token);
  const path = useLocation().pathname;

  const logoutNav = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className={styles.navbar}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          {session ? (
            <Link className={styles.brand} to={path}>
              <span>SA</span>
              <img src={logo} className={styles.logo} alt="" />
            </Link>
          ) : (
            <Link
              className={styles.brand}
              to={`${path === "/login" ? "/admin/login" : "/login"}`}
            >
              <span>SA</span>
              <img src={logo} className={styles.logo} alt="" />
            </Link>
          )}
        </div>

          <ul className={styles.menu}>
            <Menu home notification />
          </ul>


        <div className={styles.right}>
          {session ? (
            <div>
             <div className={styles.right}>
             <button
               title="Log Out"
               className={`${styles.nav__link} ${styles.logout}`}
               onClick={() => logoutNav()}
             >
               <FiLogOut />
             </button>
           </div>
           </div>
          ) : (
            <NavLink to="/login">
              <button
                title="Log In"
                className={`${styles.nav__link} ${styles.sigup}`}
                onClick={() => logoutNav()}
              >
                <FiLogIn />
              </button>
            </NavLink>
          )}
        </div>
      </nav>
      <Outlet />
    </header>
  );
}
