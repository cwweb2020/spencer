import React from "react";
import BarChart from "../components/BarChart";

const ComparitionChart = () => {
  //
  const currentMonthTotal = 12000;
  const previousMonthTotal = 10000;
  //
  return (
    <div className="comparition">
      <h2 className="comparition__title">Gráfico de Gastos</h2>
      <BarChart
        currentMonthTotal={currentMonthTotal}
        previousMonthTotal={previousMonthTotal}
      />
    </div>
  );
};

export default ComparitionChart;
