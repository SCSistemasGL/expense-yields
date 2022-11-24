import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RiAlignJustify, RiArrowUpDownFill } from "react-icons/ri";
import { Card, CardBody, CardTitle, Table } from "reactstrap";
import { ImCancelCircle } from "react-icons/im";
import { BiAddToQueue } from "react-icons/bi";

import styles from "./TableAccount.module.css";

import PaginationCard from "../../Pagination/PaginationCard";
import { nameSpace } from "../../../Utils/name.utils";
import { newDate } from "../../../Utils/date.utils";

export default function TableAccount({
  accounts,
  
}) {
  const dispatch = useDispatch();

  //Seteo de cantidad de registros por pagina
  const [currentPage, setCurrentPage] = useState(1); //Pagina actual
  const [rowPerPage, setRowPerPage] = useState(20); //Cantidad de registros por pagina
  const indexOfLastRow = currentPage * rowPerPage; //9
  const indexOfFirstRow = indexOfLastRow - rowPerPage; //0--9--18--
  const currentRow = accounts[0]? accounts.slice(indexOfFirstRow, indexOfLastRow): [];
  const [up, setUp] = useState(false);

  const [n, setN] = useState(0);

  //Setea la cantidad de paginas renderizadas
  const paginado = (pageNumber) => {
    setN(pageNumber);
    setCurrentPage(pageNumber);
  };
console.log(accounts)
  return (
    <div className={styles.container}>
      <Card>
        <CardBody>
          <CardTitle div className={styles.title}>
            <h2>CUENTAS REGISTRADAS</h2>
            {/* <div
              title="Nuevo Precio"
              className={styles.btn}
              onClick={()=> setProvincePrice(true)}
            >
              <div>AGREGAR</div>
              <BiAddToQueue className={styles.icon} />
            </div> */}
          </CardTitle>

          <Table responsive>
            <thead>
              <tr className={styles.headerTable}>
                <th>
                  <div className={styles.titleId}>Id</div>
                </th>
                <th>
                  <div className={styles.titleName}>NOMBRE</div>
                </th>
                <th>
                  <div className={styles.titleEmail}>EMAIL</div>
                </th>
                <th>
                  <div className={styles.titleActive}>HABILITADA</div>
                </th>
                <th>
                  <div className={styles.titleRol}>ROL</div>
                </th>
                  <th>
                  <div className={styles.titleDate}>FEC. CREADA</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRow[0] ? (
                currentRow.map((e, index) => (
                  <tr key={index}>
                    <td className={styles.cardContainer}>
                      <td scope="row">
                        <div className={styles.idUser}>{e.id}</div>
                      </td>
                      <td>
                        <div className={styles.name}>            
                        {nameSpace(e.lastName).toUpperCase()}, {nameSpace(e.firstName).toUpperCase()}   
                          </div>                
                      </td>
                      <td>
                        <div className={styles.email}>                     
                                   {e.email}      
                        </div>
                      </td>

                      <td>
                        <div className={styles.active}>
                         {e.isActive == true? 'SI' : 'NO'}
                        </div>
                      </td>
                       <td>
                        <div className={styles.rol}>
                         {e.role}
                        </div>
                      </td>
                          <td>
                        <div className={styles.date}>
                         {newDate(e.createdDate)}
                        </div>
                      </td>
                    </td>
                  </tr>
                ))
              ) : (
                <div className={styles.notFound}>
                  <h3>NO HAY DATOS CARGADOS</h3>
                </div>
              )}
            </tbody>
            <div className={styles.containerPagination}></div>
          
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
