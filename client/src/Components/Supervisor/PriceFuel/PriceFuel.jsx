import React, { useEffect, useState } from "react";
import Select from "react-select";

import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle, FaKey, FaEye } from "react-icons/fa";

// import { validateSignup } from "../../../Utils/validate";
// import { validateInput } from "../../../../Utils/validate";

import style from "./PriceFuel.module.css";

import { useLocation, useNavigate } from "react-router-dom";
// import { allDepartament } from "../../../../Redux/Actions/Departament";

// import {
//   optionSelect,
//   selectDepartament,
//   selectDepartBusiness,
// } from "../../../../Utils/optionBusiness";

// import { optionSelectTechnical } from "../../../../Utils/optionTechnical";
// import {
//   addDepartamentBusiness,
//   allBusiness,
//   createBusiness,
//   deleteDepartamentBusiness,
//   deleteTechnicalBusiness,
//   departamentBusiness,
//   technicalAssignedBusiness,
//   technicalsBusiness,
// } from "../../../../Redux/Actions/Business";
import { BiEditAlt } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";

export default function PriceFuel() {
  const dispatch = useDispatch();
  const navitage = useNavigate();
  const [keyOn, setKeyOn] = useState(false);

  // const [optionDepartament, setoptionDepartament] = useState([]);
  // const business = useSelector((state) => state.business.business);
  // const technicals = useSelector((state) => state.business.technicals);

  // //   const business = useSelector((state) => state.departament.departament);
  // const [optionBusiness, setOptionBusines] = useState([]);
  // const [allDepartaments, setDepartamen] = useState([]);
  // const [optionDepartament, setoptionDepartament] = useState([]);
  // const departament = useSelector((state) => state.departament.departament);
  // const [optionTechnical, setOptionTechnical] = useState([]);

  // const [optionAssigned, setOptionAssigned] = useState([]);

  const [errors, setErrors] = useState({
    business: "",
    departament: "",
    technical: "",
    code: "",
  });

  const [input, setInput] = useState({
    id: "",
    business: "",
    departament: "",
    assignedTechnical: "",
    
  });

  // useEffect(() => {
  //   dispatch(allBusiness());
  // }, []);

  // useEffect(() => {
  //   if (business[0]) {
  //     setOptionBusines(optionSelect(business));
  //   } else {
  //     dispatch(allBusiness());
  //     setOptionBusines([]);
  //   }
  //   if (technicals[0]) {
  //     setOptionTechnical(optionSelectTechnical(technicals));
  //   }
  // }, [input.business]);

  // useEffect(() => {
  //   if (departament[0]) {
  //     setoptionDepartament(selectDepartBusiness(departament, allDepartaments));
  //   } else {
  //     dispatch(allDepartament());
  //   }
  // }, [input.business, departament[0]]);

  // const handleChange = (e) => {
  //   setInput({
  //     ...input,
  //     [e.target.name]: e.target.value,
  //   });
  //   setErrors("");
  // };

  // const handleSubmit = async (e) => {
    
  //   e.preventDefault();
  //   // const { business, departament } = validateInput(input);
  //   if (!input.departament) {
  //     setErrors((old) => ({
  //       ...old,
  //       departament: "Error, debe seleccionar un departamento!",
  //     }));
  //   } else {
  //     var conf = window.confirm("Esta seguro que quiere agregar el departamento?");
  //     if(conf){
  //       const data ={
  //         departament: input.departament,
  //         business:input.business
  //       }
  //       const code = await dispatch(addDepartamentBusiness(data));
  //       if (!code) {
  //         alert("Departamento agregado con éxitos!");
  //         setoptionDepartament([])
  //         setInput((old)=>({...old, departament: "" }));
  //         // navitage('/admin/tool')
  //       } else {
  //         setErrors((old) => ({
  //           ...old,
  //           code: code.error,
  //         }));
  //       }
  //     }else{
  //       alert("El departamento NO SE AGREGO!")
  //       // navitage('/admin/tool')
  //     }
  //   }
  // }

  // const handleDelete = async (e) => {

  //   const update = {
  //     id: input.id,
  //     name: input.business,
  //     departament: e,
  //   };
  //   const code = await dispatch(deleteDepartamentBusiness(update));

  //   alert("Eliminar");
  // };

 
  // const handleSelectBusiness = async (e) => {
  //   setInput((old) => ({
  //     ...old,
  //     business: e.value.name,
  //     id: e.value._id,
  //     assignedTechnical: e.value.assignedTechnical,
  //     technicals: e.value.technicals,
  //   }));
  //   setDepartamen(e.value.departament);
  //   selectDepartBusiness(departament, e.value.departament);
  //   await dispatch(departamentBusiness(e.value.name));
  //   await dispatch(technicalsBusiness(e.value._id));
  //   setErrors({
  //     business: "",
  //     last_name: "",
  //     email: "",
  //     business: "",
  //   });
  // };

  // const handleSelectDepartament = async (e) => {
  //   setInput((old) => ({
  //     ...old,
  //     departament: e.map((option) => option.value),
  //   }));
  //   setErrors({
  //     business: "",
  //     departament: "",
  //   });
  // };

  // const handleSelectTechnical = async (e) => {
  //   setInput((old) => ({ ...old, technical: e.value }));
  //   setErrors({
  //     business: "",
  //     departament: "",
  //   });
  // };

  // const handleSubmitTechnical = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     idBusiness: input.id,
  //     idTechnical: parseInt(input.technical),
  //   };
  //   await dispatch(technicalAssignedBusiness(data));
  //   alert("tecnico asignado con exitos!");
  // };

  // const handleDeleteTechnical = async (e)=>{
  //   const data = {
  //     idBusiness: input.id,
  //     idTechnical: e._id,
  //   };

  //   await dispatch(deleteTechnicalBusiness(data))
  //   alert("Delete succssesfullt")
  // }
  return (
    <div className={style.container}>
      <form >
        <h1>- EMPRESA -</h1>
        <label>
          <h5>Empresa:</h5>
          <label className={style.wrapper}>
            <Select
              className={`${style.wrapper} ${
                errors.departament ? style.errorSelect : ""
              }`}
              // onChange={(e) => handleSelectBusiness(e)}
              // options={optionBusiness}
              placeholder="Buscar Empresa..."
              dropdownIndicator
            />
          </label>
        </label>
       
          <div>
            <label>
              <h5>Departamentos de la empresa:</h5>
  
                    <div className={style.inputGroup}>
                      <input  business="business" />
                      <TiDeleteOutline
                        className={style.icon}
                        title="Eliminar Categoria"
                        // onClick={() => handleDelete(e)}
                      />
                    </div>
            </label>

            <label>
              <h5>Agregar nuevos departamento:</h5>
              <label className={style.wrapper}>
                <Select
                  className={`${style.wrapper} ${
                    errors.departament ? style.errorSelect : ""
                  }`}
                  // onChange={(e) => handleSelectDepartament(e)}
                  // options={optionDepartament}
                  placeholder="Departamento..."
                  isMulti
                  dropdownIndicator
                />
              </label>
            </label>
            <div>
              {errors.departament ? (
                <span className={style.errorSpan}>{errors.departament}</span>
              ) : (
                ""
              )}
            </div>
            <div className={style.buttonContainer}>
              <button type="submit" >Agregar Departamento</button>
            </div>
            <label>
              <h5>Técnicos Disponibles:</h5>
                    <div className={style.inputGroup}>
                      <input
                        // value={`${e.name.toUpperCase()} ${e.last_name.toUpperCase()}`}
                      />
                      <TiDeleteOutline
                        className={style.icon}
                        title="Eliminar Técnico"
                        // onClick={() => handleDeleteTechnical(e)}
                      />
                    </div>

            </label>
            <div>
              {errors.departament ? (
                <span className={style.errorSpan}>{errors.departament}</span>
              ) : (
                ""
              )}
            </div>
            <label>
              <h5>Técnico asignado para los Ticket:</h5>
              <div className={style.inputGroup}>
                  <input
                    // value={`${input.assignedTechnical.name.toUpperCase()} ${input.assignedTechnical.last_name.toUpperCase()}`}
                  />
              </div>
            </label>
            <label>
              <h5>Asignar Técnico a la empresa:</h5>
              <label className={style.wrapper}>
                <Select
                  className={`${style.wrapper} ${
                    errors.departament ? style.errorSelect : ""
                  }`}
                  // onChange={(e) => handleSelectTechnical(e)}
                  // options={optionSelectTechnical(input.technicals)}
                  placeholder="Técnicos..."
                  dropdownIndicator
                />
              </label>
            </label>
            <div className={style.buttonContainer}>
              <button type="submit"  >
                Asignar Técnico
              </button>
            </div>
            <div>
              {errors.departament ? (
                <span className={style.errorSpan}>{errors.departament}</span>
              ) : (
                ""
              )}
            </div>

            <div>
              {errors.code ? (
                <span className={style.errorSpan}>{errors.code}</span>
              ) : (
                ""
              )}
            </div>
          </div>

      </form>
    </div>
  );
}
