const { Videogame } = require("../db");

const findAllVideogamesDB = async (id) => {
  const videgamesDB = await Videogame.findByPk(id);
  return videgamesDB;
};

module.exports = findAllVideogamesDB;
