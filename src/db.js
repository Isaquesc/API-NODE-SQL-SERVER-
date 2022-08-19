//instanciando API squelize 
const sequelizeAPI = require('sequelize');

//configurando base de dados
const database = new sequelizeAPI('BaseNodeAula','sa','123456',
{
  dialect:'mssql', host:'localhost', port:52251
});

 database.sync();

 module.exports = database;