import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "../features/searchBar/searchBarSlice";
import videogameListReducer from "../features/videogameList/videogameListSlice";

export default configureStore({
  reducer: { videogameList: videogameListReducer, searchBar: searchBarReducer },
});
