const Produto = require("../models/Produto");

exports.listarProdutos = async (req, res, next) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (err) {
    next(err);
  }
};

exports.obterProduto = async (req, res, next) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto)
      return res.status(404).json({ erro: "Produto não encontrado" });
    res.json(produto);
  } catch (err) {
    next(err);
  }
};

exports.adicionarProduto = async (req, res, next) => {
  try {
    const { nome, preco } = req.body;
    const novo = await Produto.create({ nome, preco });
    res.status(201).json(novo);
  } catch (err) {
    next(err);
  }
};

exports.atualizarProduto = async (req, res, next) => {
  try {
    const { nome, preco } = req.body;
    const [linhas] = await Produto.update(
      { nome, preco },
      { where: { id: req.params.id } }
    );
    if (!linhas)
      return res.status(404).json({ erro: "Produto não encontrado" });
    const atualizado = await Produto.findByPk(req.params.id);
    res.json(atualizado);
  } catch (err) {
    next(err);
  }
};

exports.deletarProduto = async (req, res, next) => {
  try {
    const linhas = await Produto.destroy({ where: { id: req.params.id } });
    if (!linhas)
      return res.status(404).json({ erro: "Produto não encontrado" });
    res.status(200).json({ mensagem: "Produto apagado com sucesso" });
  } catch (err) {
    next(err);
  }     
};
