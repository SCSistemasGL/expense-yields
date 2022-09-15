import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginCard from "../../../Components/Auth/Login/LoginCard";
import styles from "./Login.module.css";


export default function Login() {
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
    <LoginCard  handleAuth={handleAuth} handleLink={setSelectLink}/>
    </div>
  );
}
