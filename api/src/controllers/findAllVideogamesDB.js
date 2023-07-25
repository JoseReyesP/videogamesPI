const { Videogame } = require("../db");

const findAllVideogamesDB = async () => {
  const videgamesDB = await Videogame.findAll();
  return videgamesDB;
};

module.exports = findAllVideogamesDB;
