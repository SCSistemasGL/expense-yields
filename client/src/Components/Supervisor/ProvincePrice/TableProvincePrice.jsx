import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RiAlignJustify, RiArrowUpDownFill } from "react-icons/ri";
import { Card, CardBody, CardTitle, Table } from "reactstrap";
import { ImCancelCircle } from "react-icons/im";
import { BiAddToQueue } from "react-icons/bi";

import styles from "./TableProvincePrice.module.css";

import PaginationCard from "../../Pagination/PaginationCard";
import { nameSpace } from "../../../Utils/name.utils";
import { newDate } from "../../../Utils/date.utils";

export default function TableProvincePrice({
  provinceWithPrice,
  setProvincePrice,
  setEditProvincePrice,
  setIsEditProvince,
}) {
  const dispatch = useDispatch();

  //Seteo de cantidad de registros por pagina
  const [currentPage, setCurrentPage] = useState(1); //Pagina actual
  const [rowPerPage, setRowPerPage] = useState(20); //Cantidad de registros por pagina
  const indexOfLastRow = currentPage * rowPerPage; //9
  const indexOfFirstRow = indexOfLastRow - rowPerPage; //0--9--18--
  const currentRow = provinceWithPrice[0]
    ? provinceWithPrice.slice(indexOfFirstRow, indexOfLastRow)
    : [];
  const [up, setUp] = useState(false);

  const [n, setN] = useState(0);

  //Setea la cantidad de paginas renderizadas
  const paginado = (pageNumber) => {
    setN(pageNumber);
    setCurrentPage(pageNumber);
  };

  const handleEditProvince = (data) => {
    setEditProvincePrice(data);
    setIsEditProvince(true);
  };

  return (
    <div className={styles.container}>
      <Card>
        <CardBody>
          <CardTitle div className={styles.title}>
            <h2>PRECIO DEL COMBUSTIBLE POR PROVINCIA</h2>
            <div
              title="Nuevo Precio"
              className={styles.btn}
              onClick={() => setProvincePrice(true)}
            >
              <div>AGREGAR</div>
              <BiAddToQueue className={styles.icon} />
            </div>
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
                  <div className={styles.titlePrice}>PRECIO</div>
                </th>
                <th>
                  <div className={styles.titleDate}>FECHA DE ACTUALIZACION</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRow[0] ? (
                currentRow.map((e, index) => (
                  <tr key={index}>
                    <td
                      className={styles.cardContainer}
                      onClick={() => handleEditProvince(e)}
                    >
                      <td scope="row">
                        <div className={styles.idUser}>{e.id}</div>
                      </td>
                      <td>
                        <div className={styles.name}>
                          {nameSpace(e.nameProvince)}
                        </div>
                      </td>
                      <td>
                        <div className={styles.price}>$ {e.priceKm}</div>
                      </td>

                      <td>
                        <div className={styles.date}>
                          <span> {newDate(e.updateDate)}</span>
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
