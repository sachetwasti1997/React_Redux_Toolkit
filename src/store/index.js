import { configureStore } from "@reduxjs/toolkit";

import { carsReducer } from "./skices/carsSlice";
import { formReducer } from "./skices/formSlice";
import { changeSearchTerm, addCar, removeCar } from "./skices/carsSlice";
import { changeName, changeColor } from "./skices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, changeName, changeColor, changeSearchTerm, addCar, removeCar };
