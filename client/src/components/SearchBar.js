import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="topnav">
      <a className="active">Home</a>
      <a>About</a>
      <a>Contact</a>
      <form>
        <input type="text" placeholder="Search.."></input>
      </form>
    </div>
  );
};

export default SearchBar;
