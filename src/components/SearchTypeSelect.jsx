import { useState } from "react";

const SearchTypeSelect = (props) => {
  const setSearchType = props.setSearchType;
  const searchType = props.searchType;

  return (
    <div className="search-type-section">
      <span>Match keywords:</span>
      <div className="radios-zone">
        <label htmlFor="search-type-any">
          any
          <input
            className="search-type-select"
            id="search-type-any"
            type="radio"
            name="search-type"
            value="any"
            checked={searchType === "any"}
            onChange={(event) => {
              setSearchType("any");

              console.log(searchType);
            }}
          />
        </label>

        <label htmlFor="search-type-all">
          all
          <input
            className="search-type-select"
            id="search-type-all"
            type="radio"
            name="search-type"
            value="all"
            checked={searchType === "all"}
            onChange={(event) => {
              setSearchType("all");
              // console.log(event);
              console.log(searchType);
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default SearchTypeSelect;
