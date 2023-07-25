import React from "react";
import "./VideogameCard.css";
import imageGame from "../assets/images/videogame.png";
import { useNavigate } from "react-router-dom";
const VideogameCard = (props) => {
  const navigate = useNavigate();

  const onClickHandlerCard = () => {
    navigate(`/Details/${props.id}`);
  };

  return (
    <>
      <div className="card" key={props.id} onClick={onClickHandlerCard}>
        <img src={props.image} />
        <div>
          <h3>
            <b>{props.name}</b>
          </h3>
          <p>Rating: {props.rating}</p>
        </div>
        <small>id:{props.id}</small>
      </div>
    </>
  );
};

export default VideogameCard;
