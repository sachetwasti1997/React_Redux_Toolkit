import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
    const dispatch = useDispatch()
    const {cars} = useSelector((state) => state.cars);

  const handleCarDelete = (car) => {
    dispatch(removeCar({id:car.id}))
  }

  const list = cars?.map(car => {
    return (
        <div key={car.id}>
            <p>
                {car.name} - ${car.cost}
            </p>
            <button onClick={() => handleCarDelete(car)}>Delete</button>
        </div>
    )
  })

  return <div>{list}</div>;
};

export default CarList;
