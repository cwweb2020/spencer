import React from "react";
import DonutChart from "../components/DonutChart";

const GastosDonut = () => {
  return (
    <section className="gastos-donut">
      <div className="gastos-donut__wrapper">
        <div className="gastos-donut__img-container">
          <img src="/img/imgs/plan3.png" alt="" />
        </div>
        <DonutChart />
      </div>
    </section>
  );
};

export default GastosDonut;
