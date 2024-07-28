import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const ModalInput = ({ handleModal, isOpen }) => {
  //
  if (!isOpen) {
    return;
  }
  //
  return (
    <>
      <section className="modal">
        <div className="container">
          <IoCloseCircle onClick={handleModal} />
          <h1>titulo</h1>
          <Link to={"/incomes"}>agregar ingreso</Link>
          <Link to={"/outcomes"}>agregar gasto</Link>
        </div>
      </section>
    </>
  );
};

export default ModalInput;
