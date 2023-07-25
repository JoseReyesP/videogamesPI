const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogameRouter = require("./videogameRouter");
const postsRouter = require("./postsRouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", videogameRouter);
router.use("/posts", postsRouter);

module.exports = router;
