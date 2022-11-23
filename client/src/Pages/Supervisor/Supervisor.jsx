import React, { useEffect, useState } from "react";

import TableProvincePrice from "../../Components/Supervisor/TableProvincePrice/TableProvincePrice";
import NewProvincePriceCard from "../../Components/Supervisor/TableProvincePrice/NewProvincePriceCard";
import NavBarTools from "../../Components/Navbar/NavBarTool/NavBarTools";
import NewUserCard from "../../Components/Supervisor/User/NewUserCard";
import style from "./Supervisor.module.css";
import { useDispatch, useSelector } from "react-redux";
import { searchProvinceNotPrice, searchProvinceWithPrice } from "../../Redux/Actions/Supervisor";


export default function Supervisor() {
  const dispatch = useDispatch()

  const provinceNotPrice = useSelector((state) => state.supervisor.provinceNotPrice)
  const provinceWithPrice = useSelector((state) => state.supervisor.provinceWithPrice)
  const [selectLink, setSelectLink] = useState({ provincePriceAdd: "provincePriceAdd" });
  
  const [newProvincePrice, setProvincePrice] = useState(false)
  const [newUser, setNewUser] = useState(false)


  useEffect(() => {
    dispatch(searchProvinceNotPrice())
  }, provinceNotPrice[0])
  
  useEffect(() => {
    dispatch(searchProvinceWithPrice())
  },provinceWithPrice[0])

  const isPrice = () => {
    setProvincePrice(false)
    dispatch(searchProvinceWithPrice())
  }

  return (
    <div className={style.container}>
      <NavBarTools handleLink={setSelectLink} active={selectLink} />
        {newProvincePrice ? (
          <div
            className={style.newPage}
            id="close"
            onClick={(e) =>
              e.target.id === "close" ? setProvincePrice((old) => false) : ""
            }
          >
            <NewProvincePriceCard isPrice={isPrice} />
          </div>
        ) : (
          ""
      )}
      
      {selectLink.userAdd ? (<div>
        <NewUserCard handleLink={setSelectLink} active={selectLink} />
         
      </div>)
       : ("")}
      {selectLink.provincePriceAdd ? 
        (<div>
        <TableProvincePrice provinceWithPrice={provinceWithPrice} setProvincePrice ={setProvincePrice} />
      </div>):("")}
    </div>
  );
}
