const Livro = require("../models/Livro");

exports.listarLivros = async (req, res, next) => {
  try {
    const livros = await Livro.findAll();
    res.status(200).json(livros);
  } catch (err) {
    next(err);
  }
};
exports.buscarLivro = async (req, res, next) => {
  try {
    const livros = await Livro.findByPk(req.params.id);
    if (!livros) {
      return res.status(404).json({ erro: "Livro não encontrado" });
    }
    res.status(200).json(livros);
  } catch (err) {
    next(err);
  }
};
exports.cadastrarLivro = async (req, res, next) => {
  try {
    const { titulo, autor, anoPublicacao, descricao } = req.body;
    if (!titulo || !autor || !anoPublicacao) {
      return res
        .status(400)
        .json({ erro: "Campos obrigatórios faltando! Revise a documentação" });
    }
    if (typeof anoPublicacao !== "number" || anoPublicacao < 1) {
      return res
        .status(400)
        .json({ erro: "anoPublicacao deve ser um número inteiro maior que 0" });
    }
    const novo = await Livro.create({
      titulo,
      autor,
      anoPublicacao,
      descricao,
    });
    res.status(201).json(novo);
  } catch (err) {
    next(err);
  }
};
exports.atualizarLivro = async (req, res, next) => {
  try {
    const { titulo, autor, anoPublicacao, descricao } = req.body;

    const livro = await Livro.findByPk(req.params.id);

    if (!livro) {
      return res.status(404).json({ erro: "Livro não encontrado" });
    }

    if (!titulo || !autor || !anoPublicacao) {
      return res
        .status(400)
        .json({ erro: "Campos obrigatórios faltando! Revise a documentação" });
    }

    if (typeof anoPublicacao !== "number" || anoPublicacao < 0) {
      return res
        .status(400)
        .json({ erro: "anoPublicacao deve ser um número inteiro maior que 0" });
    }

    await livro.update({ titulo, autor, anoPublicacao, descricao });
    res.status(200).json(livro);
  } catch (err) {
    next(err);
  }
};
exports.deletarLivro = async (req, res, next) => {
  try {
    const livro = await Livro.findByPk(req.params.id);
    if (!livro) {
      return res.status(404).json({ erro: "Livro não encontrado" });
    }
    await livro.destroy();
    res.status(200).json({ mensagem: "Livro apagado com sucesso" });
  } catch (err) {
    next(err);
  }
};
