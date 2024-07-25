import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import numberFormatter from "number-formatter";

const formatAmount = (amount) => {
  return numberFormatter("#,##0.00", amount);
};

const numbers = {
  total: 28000,
  ingreso: 38000,
  gasto: 18000,
};

const Summary = () => {
  return (
    <section className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__box1">
          <img src="/img/imgs/plan4.png" alt="" />
        </div>
        <div className="dashboard__box2">
          <div className="dashboard__box2-container">
            <span className="dash-saldo-total">
              <h3>Saldo Total</h3>
              <h4>
                <BsCurrencyDollar /> {formatAmount(numbers.total)}
              </h4>
            </span>
            <div className="dashboard__box2-income-outcome">
              <span className="dash-saldo-ingreso">
                <h3>Ingresos</h3>
                <h4>
                  <BsCurrencyDollar /> {formatAmount(numbers.ingreso)}
                </h4>
              </span>
              <span className="dash-saldo-gastos">
                <h3>Gastos</h3>
                <h4>
                  <BsCurrencyDollar /> {formatAmount(numbers.gasto)}
                </h4>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
