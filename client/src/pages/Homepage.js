import SearchBar from "../components/SearchBar";
import VideogamesList from "../components/VideogamesList";
import SortBy from "../components/SortBy";
import SortAscDes from "../components/SortAscDes";
import VideogameCard from "../components/VideogameCard";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addVideoGame,
  createBackupList,
} from "../features/videogameList/videogameListSlice";
import "./Homepage.css";

const Homepage = () => {
  const dispatch = useDispatch();
  // const allvideogames = useSelector(
  //   (state) => state.videogamesList.videogamesList
  // );
  useEffect(async () => {
    let response = [];

    // if (allvideogames.length >= 0) {
    //   response = await axios.get("http://localhost:3001/videogames");
    // }

    console.log("solicitando datos");
    try {
      let response = await axios.get("http://localhost:3001/videogames");
      response.data.map((game) =>
        dispatch(
          addVideoGame({
            id: game.id,
            name: game.name,
            image: game.background_image,
            rating: game.rating,
          })
        )
      );
    } catch (error) {
      console.log(error.message);
    }
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
