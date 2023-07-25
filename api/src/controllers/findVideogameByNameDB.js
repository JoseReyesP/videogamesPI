const { Videogame, Genres } = require("../db");

const findAllVideogamesDB = async (nombre) => {
  const videgamesDB = await Videogame.findAll({
    limit: 15,
    where: { nombre: nombre },
    include: {
      model: Genres,
      attributes: ["nombre"],
      through: {
        attributes: [],
      },
    },
  });
  return videgamesDB;
};

module.exports = findAllVideogamesDB;
