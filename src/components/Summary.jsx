import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import numberFormatter from "number-formatter";
import useGetIngresosData from "../hooks/useGetIngresosData";

const formatAmount = (amount) => {
  return numberFormatter("#,##0.00", amount);
};

const numbers = {
  total: 20000,
};

const Summary = ({ totalExpense }) => {
  const { data, isLoading, error } = useGetIngresosData();
  const [saldoDiferencia, setSaldoDiferencia] = useState(0);

  //
  // Memorizar el cálculo de totalIncome
  const totalIncome = useMemo(() => {
    return data && data[0] && data[0].amount ? Number(data[0].amount) : 0;
  }, [data]);

  // Memorizar la función de cálculo de saldoDiferencia
  const calculateSaldoDiferencia = useCallback(() => {
    if (!isLoading && !error) {
      const result = totalIncome - totalExpense;
      return isNaN(result) ? 0 : result;
    }
    return 0;
  }, [totalIncome, totalExpense, isLoading, error]);

  useEffect(() => {
    setSaldoDiferencia(calculateSaldoDiferencia());
  }, [calculateSaldoDiferencia]);

  useEffect(() => {
    // console.log("Saldo Diferencia actualizado:", saldoDiferencia);
  }, [saldoDiferencia]);

  //
  //
  return (
    <section className="dashboard">
      <div className="dashboard__wrapper">
        {/* <div className="dashboard__box1">
          <img src="/img/imgs/plan4.png" alt="" />
        </div> */}
        <div className="dashboard__box2">
          <div className="dashboard__box2-container">
            <span className="dash-saldo-total">
              <h3>Saldo Total</h3>
              <h4 style={{ color: "gold" }}>
                <BsCurrencyDollar /> {formatAmount(saldoDiferencia)}
              </h4>
            </span>
            <div className="dashboard__box2-income-outcome">
              <span className="dash-saldo-ingreso">
                <h3>Ingresos</h3>
                <h4>
                  <BsCurrencyDollar /> {formatAmount(totalIncome)}
                </h4>
              </span>
              <span className="dash-saldo-gastos">
                <h3>Gastos</h3>
                <h4>
                  <BsCurrencyDollar /> {formatAmount(totalExpense)}
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
