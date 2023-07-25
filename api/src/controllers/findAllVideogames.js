const axios = require("axios");

const findAllVideogames = async () => {
  const videogames = await axios.get(
    "https://api.rawg.io/api/games?page_size=100&key=a3084ece70284ff4b13985f0a6eca7ac"
  );
  return videogames;
};

module.exports = findAllVideogames;
