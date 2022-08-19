const express = require('express');
const controllerProduto = require ('./controllers/produtoController');

const rotas = express.Router();

rotas.get('/All',controllerProduto.BuscarTodos);
rotas.post('/Criar', controllerProduto.Create);
rotas.post('/Atualizar', controllerProduto.Atualizar);
rotas.get('/BuscarId', controllerProduto.BuscarId);
rotas.post('/Delete', controllerProduto.Delete);

module.exports = rotas;