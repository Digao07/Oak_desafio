const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Produto = require('./models/Produto'); 
const sequelize = require('./config/database'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Rota para buscar todos os produtos, ordenados por valor (menor para maior)
app.get('/produtos', async (req, res) => {
  try {
    const produtos = await Produto.findAll({ order: [['valor', 'ASC']] });
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos.' });
  }
});

// Rota para cadastrar um novo produto
app.post('/produtos', async (req, res) => {
  const { nome, descricao, valor, disponivel } = req.body;

  try {
    const novoProduto = await Produto.create({
      nome,
      descricao,
      valor,
      disponivel,
    });
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar produto.' });
  }
});

// Rota para remover um produto pelo ID
app.delete('/produtos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const produto = await Produto.findByPk(id);

    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado.' });
    }

    await produto.destroy();  // Remove o produto do banco de dados
    res.json({ message: 'Produto removido com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover produto.' });
  }
});

// Sincroniza com o banco de dados e inicia o servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(error => console.log('Erro ao sincronizar banco de dados:', error));
