const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = express.Router();
const sequelize = require("./config/database");
const livrosRoutes = require("./routes/livros");
const errorHandler = require("./middlewares/errorHandler");

async function start() {
  try {
    await sequelize.sync();
    const app = express();

    app.use(cors());
    app.use(morgan("dev"));
    app.use(express.json());

    app.use("/", livrosRoutes);

    app.use(errorHandler);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));
  } catch (err) {
    console.error("Falha ao iniciar:", err);
  }
}

start();