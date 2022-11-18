import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";

//Cards
import NavBarAuth from "../../Components/Navbar/NavBarAuth/NavBarAuth";
import LoginCard from "../../Components/Auth/Login/LoginCard";
import NewPasswordCard from "../../Components/Auth/NewPassword/NewPasswordCard";
import ForgotPassword from "../../Components/Auth/ForgotPassword/ForgotPassword";
import SignupCard from "../../Components/Auth/Signup/SignupCard";

export default function Auth() {
  const auth = useSelector((state) => state.auth);
  const navitage = useNavigate();

  const [selectLink, setSelectLink] = useState({ login: "login" });


  console.log(window.innerWidth )

  const handleAuth = () => {
    console.log(auth)
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
      {/* <NavBarAuth handleLink={setSelectLink} active={selectLink} signup /> */}
      {selectLink.login ? (
        <LoginCard handleAuth={handleAuth} handleLink={setSelectLink} />
      ) : (
        ""
      )}
      {selectLink.newPassword ? (
        <NewPasswordCard handleLink={setSelectLink} />
      ) : (
        ""
      )}
      {selectLink.forgotPassword ? (
        <ForgotPassword handleLink={setSelectLink} />
      ) : (
        ""
      )}
      {selectLink.signup ? <SignupCard handleLink={setSelectLink} /> : ""}
    </div>
    <div className={styles.img}></div>
    </div>
  );
}
