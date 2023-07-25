import SearchBar from "../components/SearchBar";
import VideogamesList from "../components/VideogamesList";
import SortBy from "../components/SortBy";
import SortAscDes from "../components/SortAscDes";
import VideogameCard from "../components/VideogameCard";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addVideoGame,
  createBackupList,
} from "../features/videogameList/videogameListSlice";
import "./Homepage.css";

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(async () => {
    const response = await axios.get("http://localhost:3001/videogames");
    const games = response.data;
    games.map((game) =>
      dispatch(
        addVideoGame({
          id: game.id,
          name: game.name,
          image: game.background_image,
          rating: game.rating,
        })
      )
    );
    dispatch(createBackupList());
  }, []);
  return (
    <main>
      <SearchBar />
      <div className="sorters">
        <SortBy />
        <SortAscDes />
      </div>
      <div>
        <VideogamesList />
      </div>
    </main>
  );
};

export default Homepage;
