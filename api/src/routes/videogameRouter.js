const { Router } = require("express");
const videogameRouter = Router();
// const findAllExamples = require("../controllers/findAllExamples");
// const createExample = require("../controllers/createExample");
const findAllVideogames = require("../controllers/findAllVideogames");
const findAllVideogamesDB = require("../controllers/findAllVideogamesDB");
const findVideogameById = require("../controllers/findVideogameById");
const findVideogameByIdDB = require("../controllers/findVideogameByIdDB");
const findVideogameByName = require("../controllers/findVideogameByName");
const findVideogameByNameDB = require("../controllers/findVideogameByNameDB");
const createNewVideogame = require("../controllers/createNewVideogame");
videogameRouter.get("/", async (req, res) => {
  try {
    const { name } = req.query || "";
    if (!name) {
      const apiResponse = await findAllVideogames();
      const dbResponse = await findAllVideogamesDB();
      res.status(200).json(apiResponse.data.results.concat(dbResponse));
    } else {
      const apiResponse = await findVideogameByName(name);
      const dbResponse = await findVideogameByNameDB(name);
      console.log("respuesta api", apiResponse.data);
      console.log("respuesta db", dbResponse);
    }
  } catch (error) {
    res.status(404).json({ message: "el juego no existe" });
    console.error(error.message);
  }
});

videogameRouter.get("/:idVideogame", async (req, res) => {
  try {
    const { idVideogame } = req.params;
    const apiResponse = await findVideogameById(idVideogame);
    const dbResponse = await findVideogameByIdDB(idVideogame);
    res.status(200).json([apiResponse.data, dbResponse]);
  } catch (error) {
    console.error(error.message);
  }
});

videogameRouter.post("/", async (req, res) => {
  try {
    const data = req.body;
    if (!data.name || !data.description) {
      return res.status(400).json("data invalid");
    }
    const newVideogame = await createNewVideogame(data);
    res.status(200).json(newVideogame);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
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
