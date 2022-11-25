import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Auth.module.css";

//Cards
import NavBarAuth from "../../Components/Navbar/NavBarAuth/NavBarAuth";
import LoginCard from "../../Components/Auth/Login/LoginCard";

import EnableAccountCard from "../../Components/Account/EnableAccount/EnableAccountCard";
import ForgotPasswordAccountCard from "../../Components/Account/ForgotPasswordAccount/ForgotPasswordAccountCard";

export default function ForgotPasswordAccount() {
  const auth = useSelector((state) => state.auth);
  const navitage = useNavigate();

  const [selectLink, setSelectLink] = useState({ login: "login" });

  const handleAuth = () => {
    if (auth.role === "supervisor") navitage("/supervisor");
    else {
      navitage("/home");
    }
  };

  useEffect(() => {
    if (auth.token) {
      if (auth.role === "supervisor") navitage("/supervisor");
      else {
        navitage("/home");
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.auth}>
          <ForgotPasswordAccountCard handleLink={setSelectLink} />
      </div>
      <div className={styles.img}></div>
    </div>
  );
}
