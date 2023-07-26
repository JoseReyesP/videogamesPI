import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateDetails } from "../features/detailsSlice/detailsSlice";
import axios from "axios";

const GameDetails = () => {
  const { gameId } = useParams();

  return (
    <div className="center">
      <div>
        <img />
      </div>
      <div>Mostar detalles de {gameId}</div>
    </div>
  );
};

export default GameDetails;
