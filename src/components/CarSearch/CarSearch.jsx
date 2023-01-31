import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeSearchTerm } from "../../store";
import "./CarSearch.css";

const CarSearch = () => {
  const dispatch = useDispatch()
  const { searchTerm } = useSelector((state) => state.cars);

  console.log(searchTerm);

  const handleSearchTearmUpdate = (e) => {
    dispatch(changeSearchTerm(e.target.value))
  }

  return (
    <div className="raisedDivCarSearch">
      <div className="formDisplayCarSearch">
        <h3>My Cars</h3>
        {/* <div classname="inputCarSearch"> */}
          <label className="">Search</label>
          <input className="inputCarSearch" value={searchTerm} onChange={handleSearchTearmUpdate} />
        {/* </div> */}
      </div>
    </div>
  );
};

export default CarSearch;
