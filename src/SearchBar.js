import React, { useEffect, useState } from "react";

function SearchForm() {
  let [list, setList] = useState(false);
  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="nav-wrapper">
      <form onSubmit={onSubmit}>
        <div className="input-field s12 m4">
          <input
            id="search"
            type="search"
            placeholder="Search : Hulk, Flash, Punisher "
            required
            onClick={() => {
              setList(true);
            }}
            onBlur={() => {
              setList(false);
            }}
          />
          <label className="label-icon" htmlFor="search">
            <i className="material-icons">search</i>
          </label>
          <i className="material-icons">close</i>
        </div>
      </form>
      {list ? (
        <ul class="collection z-depth-2">
          <li class="collection-item">Alvin</li>
          <li class="collection-item">Alvin</li>
          <li class="collection-item">Alvin</li>
          <li class="collection-item">Alvin</li>
        </ul>
      ) : null}
    </div>
  );
}

export default SearchForm;
