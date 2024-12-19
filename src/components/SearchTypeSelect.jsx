import { useState } from "react";

const SearchTypeSelect = (props) => {
  const { searchType, setSearchType } = props;

  return (
    <fieldset>
      <legend>Match keywords:</legend>
      <div className="radios-zone">
        <label htmlFor="search-type-any">
          any
          <input
            id="search-type-any"
            type="radio"
            name="search-type"
            value="any"
            checked={searchType === "any"}
            onChange={(event) => {
              setSearchType("any");
            }}
          />
        </label>

        <label htmlFor="search-type-all">
          all
          <input
            id="search-type-all"
            type="radio"
            name="search-type"
            value="all"
            checked={searchType === "all"}
            onChange={(event) => {
              setSearchType("all");
            }}
          />
        </label>
      </div>
    </fieldset>
  );
};

export default SearchTypeSelect;
