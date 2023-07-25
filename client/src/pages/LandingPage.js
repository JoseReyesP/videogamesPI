import gamesImage from "../assets/images/videogame.png";
import { Link } from "react-router-dom";
import "../pages/LandingPage.css";
const LandingPage = () => {
  return (
    <main>
      <div className="center">
        <h1>Wiki videojuegos PI</h1>
      </div>
      <div>
        <img src={gamesImage} />
      </div>
      <div className="center">
        <h2>tu pagina informativa de videojuegos</h2>
      </div>
      <Link to="/videogames">
        <div className="center">
          <h1>CONTINUAR</h1>
        </div>
      </Link>
    </main>
  );
};

export default LandingPage;
