import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchRegisterEmail } from "../../Redux/Actions/Register";
import Tables from "../../Components/Table/Tables";
import NewRegister from "../../Components/Register/NewRegister";

import styles from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const { registers } = useSelector((state) => state.registers);
  const email = useSelector((state) => state.auth.email);
  console.log(registers);
  useEffect(() => {
    dispatch(searchRegisterEmail(email));
  }, []);
  const [newRegister, setNewRegister] = useState(false);

  const isRegister = () => {
    setNewRegister((old) => !old);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerTable}>
        {newRegister ? (
          <div
            className={styles.newRegister}
            id="close"
            onClick={(e) =>
              e.target.id === "close" ? setNewRegister((old) => false) : ""
            }
          >
            <NewRegister isRegister={setNewRegister} registers={registers} />
          </div>
        ) : (
          ""
        )}
       
      </div>
      <Tables
        registers={registers}
        isRegister={isRegister}
       />
    </div>
  );
}
