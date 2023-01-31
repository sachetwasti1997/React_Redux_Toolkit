import React from 'react'
import { useSelector } from 'react-redux';

import "./CarValue.css"

const CarValue = () => {

  const totalCost = useSelector(({cars: {cars, searchTerm}}) => {
    return cars
    .filter(car => 
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .reduce((acc, car) => acc + car.cost, 0)
  })

  return (
    <div className="raisedDivCarValue">
      <div className="formDisplayCarValue">
        <div className="item1">Cost - $</div>
        <div className="inputCarValue">{totalCost}</div>
      </div>
    </div>
  );
}

export default CarValue