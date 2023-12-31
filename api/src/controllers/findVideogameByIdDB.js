const { Videogame, Genres } = require("../db");

const findAllVideogamesDB = async (id) => {
  const videgamesDB = await Videogame.findByPk(id, {
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
