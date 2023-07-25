const { Router } = require("express");
const usersRouter = Router();

const findAllExamples = require("../controllers/findAllExamples");
const createExample = require("../controllers/createExample");

usersRouter.get("/", async (req, res) => {
  try {
    const examples = await findAllExamples();
    res.status(200).json(examples);
  } catch (error) {
    console.error(error.message);
  }
});

usersRouter.post("/", async (req, res) => {
  try {
    const name = req.body;
    console.log(name.name);
    const newExample = await createExample(name.name);
    res.status(201).json(newExample);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = usersRouter;
