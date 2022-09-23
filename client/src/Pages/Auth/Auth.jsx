import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";

//Cards
import LoginCard from "../../Components/Auth/Login/LoginCard";
import NavBarAuth from "../../Components/NavBarAuth/NavBarAuth";
import NewPasswordCard from "../../Components/Auth/NewPassword/NewPasswordCard";
import ForgotPassword from "../../Components/Auth/ForgotPassword/ForgotPassword"
import SignupCard from "../../Components/Auth/Signup/SignupCard"

export default function Auth() {
  const auth = useSelector((state) => state.auth);
  const navitage = useNavigate();

  const [selectLink, setSelectLink] = useState({ login: "login" });

  const handleAuth = () => {
    navitage("/home");
  };

  useEffect(() => {
    if (auth.token) navitage("/home");
  }, []);

  return (
    <div className={styles.container}>
      <NavBarAuth handleLink={setSelectLink} active={selectLink} signup />
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
      {selectLink.forgotPassword ? <ForgotPassword handleLink={setSelectLink} /> : ""}
      {selectLink.signup ? <SignupCard setSelectLink={setSelectLink} /> : ""}
    </div>
  );
}