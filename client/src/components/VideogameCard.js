import React from "react";
import "./VideogameCard.css";
import imageGame from "../assets/images/videogame.png";
const VideogameCard = (props) => {
  return (
    <>
      <div className="card" key={props.id}>
        <img src={props.image} />
        <div>
          <h3>
            <b>{props.name}</b>
          </h3>
          <p>{props.rating}</p>
        </div>
      </div>
    </>
  );
};

export default VideogameCard;
