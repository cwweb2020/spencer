// DonutChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  // Datos ficticios para el gráfico
  const data = {
    labels: [
      "Vivienda",
      "Alimento",
      "Salud",
      "Gym",
      "Transporte",
      "Ropa",
      "Entretenimiento",
      "Educación",
      "Deudas",
      "Extras",
    ],
    datasets: [
      {
        data: [1200, 600, 300, 150, 400, 200, 500, 300, 700, 100], // Montos ficticios
        backgroundColor: [
          "#1877f2",
          "#2abba7",
          "#FFCE56",
          "#E7E9ED",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#E7E9ED",
          "#FF6384",
          "#36A2EB",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#333",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: $${tooltipItem.raw}`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    cutout: "50%",
  };

  return (
    <div className="donut-container" style={container}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

const container = {
  width: "44%",
  margin: "auto",
  height: "300px",
};

// box shadow del contenedor en mobile
// box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

export default DonutChart;
