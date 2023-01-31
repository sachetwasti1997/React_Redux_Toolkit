import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeCar } from "../../store";
import "./CarList.css"

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(({cars: { cars, searchTerm }}) => {
    return cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar({ id: car.id }));
  };

  const list = cars?.map((car) => {
    return (
      <div key={car.id}>
        <div className="carListItemAlign">
          <div className="carListItemAlign1">
            {car.name} - ${car.cost}
          </div>
          <button
            className="buttonCarList"
            onClick={() => handleCarDelete(car)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  return <div className="raisedDivCarList">{list}</div>;
};

export default CarList;
