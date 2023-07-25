const { Router } = require("express");
const videogameRouter = Router();
// const findAllExamples = require("../controllers/findAllExamples");
// const createExample = require("../controllers/createExample");
const findAllVideogames = require("../controllers/findAllVideogames");
const findAllVideogamesDB = require("../controllers/findAllVideogamesDB");
const findVideogameById = require("../controllers/findVideogameById");
const findVideogameByIdDB = require("../controllers/findVideogameByIdDB");

videogameRouter.get("/", async (req, res) => {
  try {
    const apiResponse = await findAllVideogames();
    const dbResponse = await findAllVideogamesDB();
    console.log(dbResponse);
    res.status(200).json(apiResponse.data.results.concat(dbResponse));
  } catch (error) {
    console.error(error.message);
  }
});

videogameRouter.get("/:idVideogame", async (req, res) => {
  try {
    const id = req.params.idVideogame;
    const apiResponse = await findVideogameById(id);
    const dbResponse = await findVideogameByIdDB(id);
    res.status(200).json(apiResponse.data.concat(dbResponse));
  } catch (error) {
    console.error(error.message);
  }
});

// usersRouter.post("/", async (req, res) => {
//   try {
//     const name = req.body;
//     console.log(name.name);
//     const newExample = await createExample(name.name);
//     res.status(201).json(newExample);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

module.exports = videogameRouter;
