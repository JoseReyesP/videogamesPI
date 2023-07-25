import SearchBar from "../components/SearchBar";
import VideogamesList from "../components/VideogamesList";
import SortBy from "../components/SortBy";
import SortAscDes from "../components/SortAscDes";
import VideogameCard from "../components/VideogameCard";
import "./Homepage.css";

const Homepage = () => {
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
