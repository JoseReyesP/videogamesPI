import React from "react";
import "./SearchBar.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateSearchValue,
  resetSearchValue,
} from "../features/searchBar/searchBarSlice";
import {
  filtrarNombreVideoGame,
  addVideoGame,
  resetList,
} from "../features/videogameList/videogameListSlice";

const SearchBar = () => {
  const searchValue = useSelector((state) => state.searchBar.searchValue);
  const dispatch = useDispatch();

  const onChangeHandlerSearch = ({ target }) => {
    dispatch(updateSearchValue(target.value));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(filtrarNombreVideoGame(searchValue));
    dispatch(resetSearchValue());
  };

  const onClickHandlerHome = async () => {
    dispatch(resetList());
  };

  return (
    <div className="topnav">
      <Link to="/videogames">
        <a className="active" onClick={onClickHandlerHome}>
          Home
        </a>
      </Link>
      <Link to="/addVideogameForm">
        <a className="active" onClick={onClickHandlerHome}>
          Add videogame
        </a>
      </Link>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Search.."
          onChange={onChangeHandlerSearch}
          value={searchValue}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
