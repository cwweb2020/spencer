import React, { useState } from "react";
import Summary from "../components/Summary";

import CategoryProgress from "../components/CategoryProgress";
import { categories } from "../utils/utility";
import FloatButton from "../components/FloatButton";
import Divider from "@mui/material/Divider";
import ComparitionChart from "../components/ComparitionChart";
import GastosDonut from "../components/GastosDonut";
import ModalInput from "../components/ModalInput";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const totalAmount = categories.reduce(
    (sum, category) => sum + category.amount,
    0
  );

  // handles modal
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  //
  return (
    <>
      <br />
      <br />
      <br />
      <h3 className="dashboard-title">Resumen de Saldos</h3>
      <br />

      <Summary />

      <br />
      <br />

      <div style={{ width: "60%", margin: "35px auto" }}>
        <Divider />
      </div>
      <div className="own-devider">/</div>
      {/* ------------- */}

      <h3 className="dashboard-title classified">Gastos según categorías</h3>
      <GastosDonut />
      <br />
      <br />

      <div style={{ width: "60%", margin: "35px auto" }}>
        <Divider />
      </div>

      <div className="own-devider">/</div>
      {/* ------------- */}
      <h3 className="dashboard-title classified">Detalle de tus gastos</h3>
      <div className="categoryline-ilustration">
        <div className="categoryline-img-ilustration">
          <img src="img/imgs/plan1.png" alt="" />
        </div>

        <section className="category-line-container">
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
