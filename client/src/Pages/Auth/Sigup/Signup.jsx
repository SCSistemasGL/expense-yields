import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignupCard from "../../../Components/Auth/Signup/SignupCard";

import styles from "./Signup.module.css";

export default function Signup() {
  const user = useSelector((state) => state.auth);
  const navitage = useNavigate();

  const isAuth = () => {
    navitage("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.signCard}>
        <SignupCard isAuth={isAuth} />
      </div>
    </div>
  );
}
