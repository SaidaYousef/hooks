import React from "react";
import "./Header.css";
import Rate from '../Rate'

const Header = ({ setNameSearch, rateSearch, setRateSearch }) => {
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Type movie name to search"
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <Rate rating={rateSearch} setRateSearch={setRateSearch}/>
      </div>
    </div>
  );
};

export default Header;