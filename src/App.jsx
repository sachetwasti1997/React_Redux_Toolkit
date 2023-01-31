import React from "react";

import CarForm from "./components/CarForm/CarForm";
import CarList from "./components/CarList/CarList";
import CarSearch from "./components/CarSearch/CarSearch";
import CarValue from "./components/CarValue/CarValue";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
};

export default App;
