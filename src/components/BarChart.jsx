import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ currentMonthTotal, previousMonthTotal }) => {
  const data = {
    labels: ["Mes Anterior", "Mes Actual"],
    datasets: [
      {
        label: "Gastos",
        data: [previousMonthTotal, currentMonthTotal],
        backgroundColor: ["#9370db", "#0b646a"],
        borderColor: ["rgba(153, 102, 255, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
        barThickness: 85,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Comparación de Gastos Mensuales",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
