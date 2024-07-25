import React from "react";
import Summary from "../components/Summary";
import DonutChart from "../components/DonutChart";
import CategoryProgress from "../components/CategoryProgress";
import { categories } from "../utils/utility";
import FloatButton from "../components/FloatButton";

const Dashboard = () => {
  const totalAmount = categories.reduce(
    (sum, category) => sum + category.amount,
    0
  );

  //

  //
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <h3 className="dashboard-title">Resumen de Saldos</h3>
      <Summary />
      <div style={{ width: "60%", margin: "35px auto" }}>
        <hr />
      </div>
      <h3 className="dashboard-title classified">Gastos según categorías</h3>
      <DonutChart />
      <br />
      <br />
      <br />
      <br />
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
      <div className="float-button">
        <FloatButton />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Dashboard;
