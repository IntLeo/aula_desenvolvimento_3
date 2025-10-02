    /**
     * GET	/livros	Lista todos os livros
     * GET	/livros/:id	Busca um livro pelo ID
     * POST	/livros	Cadastra um novo livro
     * PUT	/livros/:id	Atualiza dados de um livro existente
     * DELETE	/livros/:id	Remove um livro
     */

    const express = require('express');
    const router = express.Router();
    const livrosController = require('../controllers/livrosController');

    router.get('/livros',livrosController.listarLivros);
    router.get('/livros/:id',livrosController.buscarLivro);
    router.post('/livros',livrosController.cadastrarLivro);
    router.put('/livros/:id',livrosController.atualizarLivro);
    router.delete('/livros/:id',livrosController.deletarLivro);
      module.exports = router;
