import React, { useState } from "react";
import Summary from "../components/Summary";

import CategoryProgress from "../components/CategoryProgress";
import { categories } from "../utils/utility";
import FloatButton from "../components/FloatButton";
import Divider from "@mui/material/Divider";
import ComparitionChart from "../components/ComparitionChart";
import GastosDonut from "../components/GastosDonut";
import ModalInput from "../components/ModalInput";
import useIsMobile from "../hooks/useIsMobile";
import { RiArrowDownDoubleLine } from "react-icons/ri";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const totalAmount = categories.reduce(
    (sum, category) => sum + category.amount,
    0
  );

  const isMobile = useIsMobile();

  // handles modal
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  //

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  //
  return (
    <>
      {!isMobile ? (
        <>
          <br />
          <br />
          <br />
          <br />
          <h3 className="dashboard-title">Resumen de Saldos</h3>
        </>
      ) : (
        <>
          <br />
          <br />
        </>
      )}

      <Summary />

      <br />
      <br />

      <div style={{ width: "60%", margin: "35px auto" }}>
        <Divider />
      </div>

      {!isMobile && <div className="own-devider">/</div>}

      {/* ------------- */}

      <h3 className="dashboard-title classified">
        {!isMobile ? "Gastos según categorías" : "Gastos categorías"}
      </h3>
      <GastosDonut />
      <br />
      <br />

      <div style={{ width: "60%", margin: "35px auto" }}>
        <Divider />
      </div>

      {!isMobile && <div className="own-devider">/</div>}
      {/* ------------- */}
      <h3 className="dashboard-title classified">
        {!isMobile ? "Detalle de tus gastos" : "Detalle"}
      </h3>
      <div className="categoryline-ilustration">
        <div className="categoryline-img-ilustration">
          <img src="img/imgs/plan1.png" alt="" />
        </div>

        <section
          className={`category-line-container ${
            isExpanded ? "expanded" : "collapsed"
          } `}
        >
          {categories
            .sort((a, b) => b.amount - a.amount)
            .map((category) => (
              <CategoryProgress
                key={category.name}
                category={category.name}
                amount={category.amount}
                total={totalAmount}
                iconPath={category.iconPath}
                color={category.color}
              />
            ))}
          <br />
          <br />
          <span
            className={`categorie-arrow-down ${
              isExpanded ? "rotate-icon" : ""
            }`}
            onClick={toggleExpand}
          >
            <RiArrowDownDoubleLine />
          </span>
        </section>
      </div>
      <br />
      <br />
      <div style={{ width: "60%", margin: "35px auto" }}>
        <Divider />
      </div>

      <ComparitionChart />

      <ModalInput handleModal={handleModal} isOpen={isOpen} />
      <div onClick={() => setIsOpen(true)} className="float-button">
        <FloatButton />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Dashboard;
