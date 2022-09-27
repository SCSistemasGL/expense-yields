import React, { useState } from "react";
import PriceFuel from "../../Components/Supervisor/PriceFuel/PriceFuel";
import NavBarTools from "../../Components/Navbar/NavBarTool/NavBarTools";

import style from "./Supervisor.module.css";


export default function Supervisor() {
    const [selectLink, setSelectLink] = useState({ businessAdd: "businessAdd" });
  

  return (
    <div className={style.container}>
      <NavBarTools handleLink={setSelectLink} active={selectLink} />
      <div>
        <PriceFuel/>
      </div>
    </div>
  );
}
