import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateDetails } from "../features/detailsSlice/detailsSlice";
import axios from "axios";

const GameDetails = () => {
  const { gameId } = useParams();
  const details = useSelector((state) => state.details.values);
  const dispatch = useDispatch();
  useEffect(async () => {
    const response = await axios.get(
      `http://localhost:3001/videogames/${gameId}`
    );
    const gameDetails = response.data;
    dispatch(updateDetails(gameDetails));
  }, []);
  console.log(details);
  return (
    <div className="center">
      <div>
        <img />
      </div>
      <div></div>
    </div>
  );
};

export default GameDetails;
