import React, { useEffect, useState } from "react";

import TableProvincePrice from "../../Components/Supervisor/ProvincePrice/TableProvincePrice";
import NewProvincePriceCard from "../../Components/Supervisor/ProvincePrice/NewProvincePriceCard";
import NavBarTools from "../../Components/Navbar/NavBarTool/NavBarTools";

import style from "./Supervisor.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  searchProvinceNotPrice,
  searchProvinceWithPrice,
} from "../../Redux/Actions/Supervisor";
import { searchAccounts } from "../../Redux/Actions/Account";
import TableAccount from "../../Components/Supervisor/Account/TableAccount";
import NewAccountCard from "../../Components/Supervisor/Account/NewAccountCard";
import EditProvincePriceCard from "../../Components/Supervisor/ProvincePrice/EditProvincePriceCard";

export default function Supervisor() {
  const dispatch = useDispatch();

  const provinceNotPrice = useSelector(
    (state) => state.supervisor.provinceNotPrice
  );
  const provinceWithPrice = useSelector(
    (state) => state.supervisor.provinceWithPrice
  );
  const accounts = useSelector((state) => state.account.accounts);

  const [selectLink, setSelectLink] = useState({
    tableProvincePrice: "tableProvincePrice",
  });

  const [newProvincePrice, setProvincePrice] = useState(false);
  const [newUser, setNewUser] = useState(false);

  const [editProvincePrice, setEditProvincePrice] = useState({});
  const [isEditProvince, setIsEditProvince] = useState(false);

  useEffect(() => {
    dispatch(searchProvinceNotPrice());
  }, provinceNotPrice[0]);

  useEffect(() => {
    dispatch(searchProvinceWithPrice());
  }, provinceWithPrice[0]);

  useEffect(() => {
    dispatch(searchAccounts());
  }, []);

  const isPrice = () => {
    setProvincePrice(false);
    dispatch(searchProvinceWithPrice());
  };

  const isUpdatePrice = () => {
    setIsEditProvince(false);
    dispatch(searchProvinceWithPrice());
  };
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

      {isEditProvince ? (
        <div
          className={style.newPage}
          id="close"
          onClick={(e) =>
            e.target.id === "close" ? setIsEditProvince((old) => false) : ""
          }
        >
          <EditProvincePriceCard
            data={editProvincePrice}
            isUpdatePrice={isUpdatePrice}
          />
        </div>
      ) : (
        ""
      )}

      {selectLink.accountAdd ? (
        <div>
          <NewAccountCard handleLink={setSelectLink} active={selectLink} />
        </div>
      ) : (
        ""
      )}

      {selectLink.tableProvincePrice ? (
        <div>
          <TableProvincePrice
            provinceWithPrice={provinceWithPrice}
            setProvincePrice={setProvincePrice}
            setEditProvincePrice={setEditProvincePrice}
            setIsEditProvince={setIsEditProvince}
          />
        </div>
      ) : (
        ""
      )}

      {selectLink.tableAccounts ? (
        <div>
          <TableAccount accounts={accounts} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
