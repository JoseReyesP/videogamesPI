import SearchBar from "../components/SearchBar";
import VideogamesList from "../components/VideogamesList";
import SortBy from "../components/SortBy";
import SortAscDes from "../components/SortAscDes";
import VideogameCard from "../components/VideogameCard";

const Homepage = () => {
  return (
    <main>
      <SearchBar />
      <SortBy />
      <SortAscDes />
      <VideogamesList />
      <VideogameCard />
    </main>
  );
};

export default Homepage;
