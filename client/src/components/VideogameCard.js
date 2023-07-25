import React from "react";
import "./VideogameCard.css";
import imageGame from "../assets/images/videogame.png";
const VideogameCard = (props) => {
  return (
    <>
      <div className="card">
        <img src={imageGame} />
        <div>
          <h3>
            <b>{props.name}</b>
          </h3>
          <p>{props.genero}</p>
        </div>
      </div>
    </>
  );
};

export default VideogameCard;
