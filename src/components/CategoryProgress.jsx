import React from "react";
import numberFormatter from "number-formatter";

//

const CategoryProgress = ({ category, amount, total, iconPath, color }) => {
  const percentage = ((amount / total) * 100).toFixed(2);

  const formattedAmount = numberFormatter("#,##0.00", amount);

  //
  return (
    <div className="container">
      <img src={iconPath} alt={category} className="icon" />
      <div className="progress-container">
        <span className="category-name">{category}</span>
        <span
          className="category-name"
          style={{ left: "50%", fontWeight: "bold" }}
        >
          {percentage}%
        </span>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${percentage}%`, backgroundColor: color }}
          >
            <span className="progress-text"> </span>
          </div>
        </div>
      </div>
      <div className="amount">${formattedAmount}</div>
    </div>
  );
};

export default CategoryProgress;
