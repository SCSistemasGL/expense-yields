import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Auth.module.css";


import EnableAccountCard from "../../Components/Account/EnableAccount/EnableAccountCard";

export default function EnableAccount() {
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
        <EnableAccountCard handleLink={setSelectLink} />
      </div>
      <div className={styles.img}></div>
    </div>
  );
}
