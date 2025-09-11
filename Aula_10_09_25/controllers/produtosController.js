let produtos = require('../data/produtos');

exports.listarProdutos = (req, res) => {
  res.json(produtos);
}   

exports.obterProduto = (req, res, next) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);
    if (!produto) {
        const err = new Error('Produto não encontrado');
        err.status = 404;
        return next(err);
    }
    res.json(produto);
}   

exports.adicionarProduto = (req, res, next) => {
    const { nome, preco } = req.body;
    if (!nome || !preco) {
        const err = new Error('Nome e preço são obrigatórios');
        err.status = 400;
        return next(err);
    }
    const novoProduto = {
        id: produtos.length + 1,
        nome,
        preco
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
}

exports.atualizarProduto = (req, res, next) => {
    const id = parseInt(req.params.id);
    const { nome, preco } = req.body;
    const produtoIndex = produtos.findIndex(p => p.id === id);  
    if (produtoIndex === -1) {
        const err = new Error('Produto não encontrado');
        err.status = 404;
        return next(err);
    }
    if (!nome || !preco) {
        const err = new Error('Nome e preço são obrigatórios');
        err.status = 400;
        return next(err);
    }
    produtos[produtoIndex] = { id, nome, preco };
    res.json(produtos[produtoIndex]);
}

exports.deletarProduto = (req, res, next) => {
    const id = parseInt(req.params.id);
    const produtoIndex = produtos.findIndex(p => p.id === id);
    if (produtoIndex === -1) {
        const err = new Error('Produto não encontrado');
        err.status = 404;
        return next(err);
    }
    produtos.splice(produtoIndex, 1);
    res.status(204).end();
}
