const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = express.Router();
const produtosController = require('../controllers/produtosController');
const produtosRouter = require('../routes/produtos');
const errorHandler = require('../middleware/errorHandler');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/produtos', produtosRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});