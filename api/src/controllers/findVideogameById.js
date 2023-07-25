const axios = require("axios");

const findVideogameById = async (id) => {
  const videogames = await axios.get(
    `https://api.rawg.io/api/games/${id}?key=a3084ece70284ff4b13985f0a6eca7ac`
  );
  return videogames;
};

module.exports = findVideogameById;
