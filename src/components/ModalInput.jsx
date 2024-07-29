import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import useIsMobile from "../hooks/useIsMobile";

const ModalInput = ({ handleModal, isOpen }) => {
  const isMobile = useIsMobile();
  //
  if (!isOpen) {
    return;
  }
  //
  return (
    <>
      <section className="modal">
        <div className="container">
          <div className="modal__box1">
            <Link to={"/incomes"}>
              <span className="flex-center">
                <h4>{!isMobile ? "Agregar Ingreso" : "Ingreso"} </h4>{" "}
                <MdOutlineAddAPhoto />
              </span>
            </Link>
          </div>
          <div className="modal__box2">
            <Link to={"/outcomes"}>
              <span className="flex-center">
                <h4 style={{ fontSize: "1em" }}>
                  {!isMobile ? "Agregar Gasto" : "Gasto"}
                </h4>{" "}
                <IoIosLogOut />
              </span>
            </Link>
          </div>
          <IoCloseCircle className="close-modal" onClick={handleModal} />
        </div>
      </section>
    </>
  );
};

export default ModalInput;
