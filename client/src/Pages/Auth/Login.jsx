import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Auth.module.css";

//Cards
import NavBarAuth from "../../Components/Navbar/NavBarAuth/NavBarAuth";
import LoginCard from "../../Components/Auth/Login/LoginCard";

import EnableAccountCard from "../../Components/Account/EnableAccount/EnableAccountCard";
import ForgotPasswordAccount from "../../Components/Account/ForgotPasswordAccount/ForgotPasswordAccountCard";

export default function Login() {

  return (
    <div className={styles.container}>
      <div className={styles.auth}>
          <LoginCard />
      </div>
      <div className={styles.img}></div>
    </div>
  );
}
