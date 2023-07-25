const { Videogame, Genres } = require("../db");

const findAllVideogamesDB = async () => {
  const videgamesDB = await Videogame.findAll({ include: [Genres] });
  return videgamesDB;
};

module.exports = findAllVideogamesDB;
