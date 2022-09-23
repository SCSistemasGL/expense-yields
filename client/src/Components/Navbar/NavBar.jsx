import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import Menu from "./Menu/Menu";
import { logout } from "../../Redux/Actions/Auth";

import styles from "./NavBar.module.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const session = useSelector((store) => store.auth.token);
  const path = useLocation().pathname;

  const logoutNav = () => {
    dispatch(logout());
    navigate("/auth");
  };

  return (
    <header className={styles.navbar}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          {session ? (
            <Link className={styles.brand} to={path}>
              <img
                src="https://servi-compras.com.ar/img/logoServiComprasHeader.svg"
                className={styles.logo}
                alt=""
              />
            </Link>
          ) : (
            <Link className={styles.brand} to="/auth">
              <img
                src="https://servi-compras.com.ar/img/logoServiComprasHeader.svg"
                className={styles.logo}
                alt=""
              />
            </Link>
          )}
        </div>

        <ul className={styles.menu}>
          {session ? <Menu home notification /> : <></>}
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
            <></>
          )}
        </div>
      </nav>
      <Outlet />
    </header>
  );
}
