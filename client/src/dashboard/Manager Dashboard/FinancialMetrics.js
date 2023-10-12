import React, { useState } from 'react';
import './FinancialMetrics.css';

function FinancialMetrics() {
  const [revenue, setRevenue] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [costOfGoodsSold, setCostOfGoodsSold] = useState(0);
  const [operatingExpenses, setOperatingExpenses] = useState(0);
  const [investment, setInvestment] = useState(0);
  const [cashFlow, setCashFlow] = useState(0);
  const [totalAssets, setTotalAssets] = useState(0);
  const [totalEquity, setTotalEquity] = useState(0);
 const  [totalDebt, setTotalDebt] = useState(0);

  const calculateNetProfit = () => {
    return revenue - expenses;
  };

  const calculateGrossProfitMargin = () => {
    if (revenue !== 0) {
      return ((revenue - costOfGoodsSold) / revenue) * 100;
    }
    return 0;
  };

  const calculateOperatingProfitMargin = () => {
    if (revenue !== 0) {
      return ((revenue - operatingExpenses) / revenue) * 100;
    }
    return 0;
  };

  const calculateROI = () => {
    if (investment !== 0) {
      return (calculateNetProfit() / investment) * 100;
    }
    return 0;
  };

  const handleCalculateCashFlow = () => {
    // Perform cash flow calculation based on cash inflows and outflows
    // Update the 'cashFlow' state accordingly
    const inflows = 0; // Placeholder value, update with actual calculation
    const outflows = 0; // Placeholder value, update with actual calculation
    setCashFlow(inflows - outflows);
  };

  const calculateDebtToEquityRatio = () => {
    if (totalEquity !== 0) {
      return totalDebt / totalEquity;
    }
    return 0;
  };

  const calculateROA = () => {
    if (totalAssets !== 0) {
      return (calculateNetProfit() / totalAssets) * 100;
    }
    return 0;
  };

  const calculateROE = () => {
    if (totalEquity !== 0) {
      return (calculateNetProfit() / totalEquity) * 100;
    }
    return 0;
  };

  return (
    <div className="financial-metrics-container">
      <h2>Financial Metrics</h2>
      <label htmlFor="totalDebt">Total Debt:</label>
          <input
            type="number"
            id="totalDebt"
            value={totalDebt}
            onChange={(e) => setTotalDebt(Number(e.target.value))}
          />
      <div className="input-section">
        <label htmlFor="revenue">Revenue:</label>
        <input
          type="number"
          id="revenue"
          value={revenue}
          onChange={(e) => setRevenue(Number(e.target.value))}
        />

        <label htmlFor="expenses">Expenses:</label>
        <input
          type="number"
          id="expenses"
          value={expenses}
          onChange={(e) => setExpenses(Number(e.target.value))}
        />

        <label htmlFor="costOfGoodsSold">Cost of Goods Sold:</label>
        <input
          type="number"
          id="costOfGoodsSold"
          value={costOfGoodsSold}
          onChange={(e) => setCostOfGoodsSold(Number(e.target.value))}
        />

        <label htmlFor="operatingExpenses">Operating Expenses:</label>
        <input
          type="number"
          id="operatingExpenses"
          value={operatingExpenses}
          onChange={(e) => setOperatingExpenses(Number(e.target.value))}
        />

        <label htmlFor="investment">Investment:</label>
        <input
          type="number"
          id="investment"
          value={investment}
          onChange={(e) => setInvestment(Number(e.target.value))}
        />

        <button onClick={handleCalculateCashFlow}>Calculate Cash Flow</button>

        <label htmlFor="totalAssets">Total Assets:</label>
        <input
          type="number"
          id="totalAssets"
          value={totalAssets}
          onChange={(e) => setTotalAssets(Number(e.target.value))}
        />

        <label htmlFor="totalEquity">Total Equity:</label>
        <input
          type="number"
          id="totalEquity"
          value={totalEquity}
          onChange={(e) => setTotalEquity(Number(e.target.value))}
        />
      </div>

      <div className="output-section">
        <h3>Financial Metrics:</h3>
        <p>Net Profit: {calculateNetProfit()}</p>
        <p>Gross Profit Margin: {calculateGrossProfitMargin()}%</p>
        <p>Operating Profit Margin: {calculateOperatingProfitMargin()}%</p>
        <p>Return on Investment (ROI): {calculateROI()}%</p>
        <p>Cash Flow: {cashFlow}</p>
        <p>Debt-to-Equity Ratio: {calculateDebtToEquityRatio()}</p>
        <p>Return on Assets (ROA): {calculateROA()}%</p>
        <p>Return on Equity (ROE): {calculateROE()}%</p>
      </div>
    </div>
  );
}

export default FinancialMetrics;
