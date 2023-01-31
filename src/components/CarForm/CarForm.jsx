import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeName, changeCost, addCar } from "../../store";
import "./CarForm.css";

const CarForm = () => {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => state.form);

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    const cost = parseInt(event.target.value) || 0;
    dispatch(changeCost(cost));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="raisedDivCarForm">
      <h4>Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className={"formDisplayCarForm"}>
          <div>
            <label>Name</label>
            <input
              className="inputCarForm"
              onChange={handleNameChange}
              value={name}
            />
          </div>
          <div>
            <label>Cost</label>
            <input
              className="inputCarForm"
              onChange={handleCostChange}
              value={cost || ""}
              type="number"
            />
          </div>
          <button className="buttonCarForm">Save Car</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
