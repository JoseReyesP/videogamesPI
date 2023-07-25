import React from "react";
import "./VideogameCard.css";
import imageGame from "../assets/images/videogame.png";
const VideogameCard = () => {
  return (
    <>
      <div className="card">
        <img src={imageGame} />
        <div>
          <h3>
            <b>videogame name</b>
          </h3>
          <p> videogame genero</p>
        </div>
      </div>
    </>
  );
};

export default VideogameCard;
