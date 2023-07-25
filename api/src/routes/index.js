const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const usersRouter = require("./usersRouter");
const postsRouter = require("./postsRouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/users", usersRouter);
router.use("/posts", postsRouter);

module.exports = router;
