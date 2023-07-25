const { Videogame } = require("../db");

const createNewVideogame = async (data) => {
  const newvideogame = await Videogame.create(data);
  return newvideogame;
};

module.exports = createNewVideogame;
