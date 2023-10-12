import React, { useState } from 'react';
import './estimationTools.css';

function EstimationTools() {
  const [quantity, setQuantity] = useState({
    unitCount: '',
    linearLength: '',
    surfaceArea: '',
    cubicVolume: '',
    physicalWeight: ''
  });

  const [cost, setCost] = useState({
    costPerUnit: '',
    quantity: '',
    overheadCosts: '',
    markupPercentage: '',
    totalCost: ''
  });
  const [labour, setLabour] = useState('');
  const [profitMargin, setProfitMargin] = useState('');
  const [quantityResult, setQuantityResult] = useState('');
  const [costResult, setCostResult] = useState('');
  const [labourResult, setLabourResult] = useState('');
  const [profitMarginResult, setProfitMarginResult] = useState('');

  const handleQuantityTakeoff = () => {
    const result =
      parseFloat(quantity.unitCount) +
      parseFloat(quantity.linearLength) +
      parseFloat(quantity.surfaceArea) +
      parseFloat(quantity.cubicVolume) +
      parseFloat(quantity.physicalWeight);
    
    setQuantityResult(result);
  };

  const handleCostEstimation = () => {
   const costValue = 
        parseFloat(cost.costPerUnit) *
        parseFloat(cost.quantity);
    const overheadValue = parseFloat(cost.overheadCosts);
    const markupValue = costValue * (parseFloat(cost.markupPercentage) / 100);
    const totalCostValue = costValue + overheadValue + markupValue; // Replace with actual calculation logic

    setCost(prevCost => ({
        ...prevCost,
        totalCost: totalCostValue
    }));

    setCostResult(totalCostValue);
  };

  const handleLabourEstimation = () => {
    const result = parseFloat(labour) * 5; // Assuming 5 hours required for assembly
    setLabourResult(result);
  };

  const handleProfitMarginCalculation = () => {
    const result = parseFloat(profitMargin) * 0.1; // Replace with actual calculation logic
    setProfitMarginResult(result);
  };

  const handleQuantityChange = (field, value) => {
    setQuantity(prevQuantity => ({
      ...prevQuantity,
      [field]: value
    }));
  };

  return (
    <div className="estimation-tools-container">
      <h2 className="estimation-tools-title">Estimation Tools</h2>
      <div className="estimation-tool">
        <h3>Quantity Takeoff</h3>
        <div className="input-group">
          <label htmlFor="unitCount">Unit Count:</label>
          <input
            type="number"
            id="unitCount"
            value={quantity.unitCount}
            onChange={(e) => handleQuantityChange('unitCount', e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="linearLength">Linear Length:</label>
          <input
            type="number"
            id="linearLength"
            value={quantity.linearLength}
            onChange={(e) => handleQuantityChange('linearLength', e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="surfaceArea">Surface Area:</label>
          <input
            type="number"
            id="surfaceArea"
            value={quantity.surfaceArea}
            onChange={(e) => handleQuantityChange('surfaceArea', e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="cubicVolume">Cubic Volume:</label>
          <input
            type="number"
            id="cubicVolume"
            value={quantity.cubicVolume}
            onChange={(e) => handleQuantityChange('cubicVolume', e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="physicalWeight">Physical Weight:</label>
          <input
            type="number"
            id="physicalWeight"
            value={quantity.physicalWeight}
            onChange={(e) => handleQuantityChange('physicalWeight', e.target.value)}
          />
        </div>
        <button onClick={handleQuantityTakeoff}>Calculate</button>
        <p>Result: {quantityResult}</p>
      </div>

      <div className="estimation-tool">
        <h3>Cost Estimation</h3>
        <div className="input-group">
          <label htmlFor="cost">Cost:</label>
          <input
            type="number"
            id="cost"
            value={cost.costPerUnit}
            onChange={(e) => setCost(prevCost => ({...prevCost, costPerUnit: e.target.value}))}
          />
        </div>
        <div className="input-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={cost.quantity}
            onChange={(e) => setCost(prevCost => ({ ...prevCost, quantity: e.target.value }))}
          />
        </div>
        <div className="input-group">
          <label htmlFor="overhead">Overhead Costs:</label>
          <input
            type="number"
            id="overhead"
            value={cost.overheadCosts}
            onChange={(e) => setCost(prevCost => ({ ...prevCost, overheadCosts: e.target.value }))}
          />
        </div>
        <div className="input-group">
          <label htmlFor="markup">Markup Percentage:</label>
          <input
            type="number"
            id="markup"
            value={cost.markupPercentage}
            onChange={(e) => setCost(prevCost => ({ ...prevCost, markupPercentage: e.target.value}))}
          />
        </div>
        <button onClick={handleCostEstimation}>Calculate</button>
        <p>Result: {costResult}</p>
      </div>

      <div className="estimation-tool">
        <h3>Labour Estimation</h3>
        <div className="input-group">
          <label htmlFor="labour">Direct Hourly labor rate:</label>
          <input
            type="number"
            id="labour"
            value={labour}
            onChange={(e) => setLabour(e.target.value)}
          />
        </div>
        <button onClick={handleLabourEstimation}>Calculate</button>
        <p>Total Labour Costs {labourResult}</p>
      </div>

      <div className="estimation-tool">
        <h3>Profit Margin Calculation</h3>
        <div className="input-group">
          <label htmlFor="profit-margin">Profit Margin:</label>
          <input
            type="number"
            id="profit-margin"
            value={profitMargin}
            onChange={(e) => setProfitMargin(e.target.value)}
          />
        </div>
        <button onClick={handleProfitMarginCalculation}>Calculate</button>
        <p>Result: {profitMarginResult}</p>
      </div>
    </div>
  );
}

export default EstimationTools;
