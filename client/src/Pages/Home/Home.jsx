import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../Redux/Actions/Auth";
import styles from "./Home.module.css";
import Tables from "../../Components/Table/Tables";
import { searchRegisterEmail } from "../../Redux/Actions/Register";

import NewRegister from "../../Components/Register/NewRegister";

export default function Home() {
  const dispatch = useDispatch();
  const { registers } = useSelector((state) => state.registers);
  const email = useSelector((state) => state.auth.email);
  console.log(registers);
  useEffect(() => {
    dispatch(searchRegisterEmail(email));
  }, []);
  const [newRegister, setNewRegister] = useState(false);
//   const [detailTicket, setDetailTicket] = useState(false);
//   const tickets = useSelector((state) => state.tickets.tickets);
//   const [ticketId, setTicketId] = useState("");
//   const user = useSelector((state) => state.auth.user);
//   const [followTiket, setFollowTicket] = useState(false);
//   const [cancelTicket, setCancelTicket] = useState(false);

//   useEffect(() => {
//     dispatch(allTickets(user));
//   }, [newRegister]);

  const isRegister = () => {
    setNewRegister((old) => !old);
  };

//   const isDeteail = () => {
//     setDetailTicket((old) => !old);
//     dispatch(allTickets(user));
//   };

//   const isFollowing = () => {
//     setFollowTicket((old) => !old);
//     dispatch(allTickets(user));
//   };

//   const isCancel = () => {
//     dispatch(allTickets(user));
//   };
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
