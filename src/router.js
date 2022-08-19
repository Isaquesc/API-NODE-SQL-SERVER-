const express = require('express');
const controllerProduto = require ('./controllers/produtoController');

const rotas = express.Router();

rotas.get('/BuscarTodos',controllerProduto.BuscarTodos);
rotas.post('/InserirProduto', controllerProduto.Create);
rotas.post('/AtualizarProduto', controllerProduto.Atualizar);
rotas.get('/BuscarProdutoPorCodigo', controllerProduto.BuscarId);
rotas.post('/DeletarProduto', controllerProduto.Delete);

module.exports = rotas;