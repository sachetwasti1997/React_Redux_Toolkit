import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => state.form);

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    const cost = parseInt(event.target.value) || 0
    dispatch(changeCost(cost))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addCar({name, cost}))
  }

  return (
    <div>
      <h4>Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input onChange={handleNameChange} value={name} />
        </div>
        <div>
          <label>Cost</label>
          <input onChange={handleCostChange} value={cost || ""} type="number" />
        </div>
        <button>Save Car</button>
      </form>
    </div>
  );
};

export default CarForm;
