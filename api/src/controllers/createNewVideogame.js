const { Videogame, Gender } = require("../db");

const createNewVideogame = async (data) => {
  const newvideogame = await Videogame.create(data);
  newvideogame.addGender();
  return newvideogame;
};

module.exports = createNewVideogame;
