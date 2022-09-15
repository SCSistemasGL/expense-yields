import React from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { logout } from "../../Redux/Actions/Auth";
import styles from "./Home.module.css"

export default function Home () {


    return(
        <div className={styles.container}><h1>
        HOME
        </h1>
        </div>
    )
}