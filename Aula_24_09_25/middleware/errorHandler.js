module.exports = (err, req, res, next) => {
 console.error(err);
 res.status(400).json({ erro: err.message || 'Erro desconhecido' });
};