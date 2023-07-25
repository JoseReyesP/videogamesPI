import React from "react";
import VideogameCard from "./VideogameCard";
import "./VideogameList.css";
import { useSelector, useDispatch } from "react-redux";
import { updatePage } from "../features/pageSlice/pageSlice";

const VideogamesList = () => {
  //const page = useSelector((state) => state.videogameList.videogameList);
  const list = useSelector((state) => state.videogameList.videogameList);
  //console.log(page);
  return (
    <div className="wrapper">
      {list.map((l) => (
        <VideogameCard
          key={l.id}
          id={l.id}
          name={l.name}
          image={l.image}
          rating={l.rating}
        />
      ))}
    </div>
  );
};

export default VideogamesList;
