import React from "react";

export default function Search() {
  return (
    <div>
      <form id="search-form">
        <div className="container enter-city">
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                id="search-input"
                className="form-control"
                placeholder="Enter a city"
              />
            </div>
            <div className="col-2">
              <button type="submit" className="search-button">
                Search
              </button>
            </div>
            <div className="col-2">
              <button type="submit" className="current-button">
                Current
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
