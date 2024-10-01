const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Produto = require('./models/Produto'); 
const sequelize = require('./config/database'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/produtos', async (req, res) => {
  try {
    const produtos = await Produto.findAll({ order: [['valor', 'ASC']] });
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos.' });
  }
});

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


app.delete('/produtos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const produto = await Produto.findByPk(id);

    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado.' });
    }

    await produto.destroy(); 
    res.json({ message: 'Produto removido com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover produto.' });
  }
});


sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(error => console.log('Erro ao sincronizar banco de dados:', error));
