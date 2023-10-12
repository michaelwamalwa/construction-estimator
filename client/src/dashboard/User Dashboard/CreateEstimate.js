import React, { useState,  } from 'react';
import axios from "axios";
import './CreateEstimates.css';

export default function CreateEstimates() {
  const [area, setArea] = useState(0);
  const [materialCost, setMaterialCost] = useState(0);
  const [equipmentCost, setEquipmentCost] = useState(0);
  const [otherCost, setOtherCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const calculateEstimates = () => {
    // Calculate the estimates based on the area
    // and update the state variables accordingly
    // For example:
    const calculatedMaterialCost = area * 10; // Calculate material cost based on area
    setMaterialCost(calculatedMaterialCost);

    const calculatedEquipmentCost = area * 5; // Calculate equipment cost based on area
    setEquipmentCost(calculatedEquipmentCost);

    const calculatedOtherCost = 100; // Calculate other expenses
    setOtherCost(calculatedOtherCost);

    const calculatedTotalCost =
      calculatedMaterialCost +
      calculatedEquipmentCost +
      calculatedOtherCost;
    setTotalCost(calculatedTotalCost);

    const data = {
      area, 
      materialCost: calculatedMaterialCost,
      equipmentCost: calculatedEquipmentCost,
      otherCost: calculatedOtherCost,
      totalCost: calculatedTotalCost
    };
    axios.post('http://localhost:5000/estimate', data)
    .then(res => {
      console.log(res.data);//handle the response from the server
    })
    .catch(error => {
      console.error('Error:', error);//handle any errors that occur during the request
    });
  };

  return (
    <div className="container">
      <h2>Create Estimates</h2>
      <div className="input">
        <label htmlFor="area" className="label">Area (in square meters):</label>
        <input
          type="number"
          id="area"
          value={area}
          onChange={(e) => setArea(parseFloat(e.target.value))}
        />
      </div>
      <div className="input">
        <button className="button" onClick={calculateEstimates}>Calculate Estimates</button>
      </div>
      <div className="result">
        <h3>Material Cost:</h3>
        <p>{materialCost}</p>
      </div>
    
      <div className="result">
        <h3>Equipment Cost:</h3>
        <p>{equipmentCost}</p>
      </div>
      <div className="result">
        <h3>Other Expenses:</h3>
        <p>{otherCost}</p>
      </div>
      <div className="result">
        <h3>Total Cost:</h3>
        <p>{totalCost}</p>
      </div>
    </div>
  );
}


