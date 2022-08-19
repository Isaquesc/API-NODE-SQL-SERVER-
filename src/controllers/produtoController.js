const modelProduto = require('../models/produto')

module.exports = 
{
  async BuscarTodos(req, res){
    try {
      const produtos = await modelProduto.findAll();
      return res.json(produtos)
    } catch (error) {
      return console.error("Erro na LIST: " + error);
    }
  },

  async Create(req, res){
    try {
      const produtos = await modelProduto.create(
        {
          Codigo: req.body.Codigo,
          Descricao: req.body.Descricao,
          DataCriacao: new Date(),
          DataAtualizacao: null
        }
      )
      
      return res.json(produtos)
    } catch (error) {
      return console.error("Erro na Create: " + error);
    }
  },

  async Atualizar(req, res){
    try {
      const produto = await modelProduto.findByPk(req.body.Codigo);
        if(produto){
          produto.Descricao = req.body.Descricao,
          produto.DataAtualizacao = new Date(),
          await produto.save();
        } else {
          return res.json({mensagem: "produto nao encontrado"})
        }
      
      return res.json(produto)
    } catch (error) {
      return console.error("Erro na Update: " + error);
    }
  }, 

  async BuscarId(req, res){
    
    try {
      const produto = await modelProduto.findByPk(req.body.Codigo)
      return res.json(produto)
    } catch (error) {
      return console.error("Erro na BuscarId: " + error);
    }

  },

  async Delete(req, res){
    try {
      const produto = await modelProduto.findByPk(req.body.Codigo)
      if(produto){
        produto.destroy;
      }
      return res.json(produto)
    } catch (error) {
      return console.error("Erro na Delete: " + error);
    }
  }

}