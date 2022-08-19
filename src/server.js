const express = require('express');
const api = express();
const rotas = require('./router');

api.use(express.json());
api.use(rotas);
api.listen(8080);

