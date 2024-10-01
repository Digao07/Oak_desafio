import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './ProductForm.css';  // Importa o arquivo CSS

const ProductForm = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [disponivel, setDisponivel] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoProduto = {
      nome,
      descricao,
      valor: parseFloat(valor),
      disponivel
    };

    axios.post('http://localhost:5000/produtos', novoProduto)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('Erro ao cadastrar produto:', error);
      });
  };

  return (
    <div className="form-container">
      <h1>Cadastrar Produto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome do Produto</label>
          <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Descrição</label>
          <textarea 
            value={descricao} 
            onChange={(e) => setDescricao(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Valor</label>
          <input 
            type="number" 
            step="0.01"
            value={valor} 
            onChange={(e) => setValor(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Disponível para Venda</label>
          <select 
            value={disponivel} 
            onChange={(e) => setDisponivel(e.target.value === 'true')}
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Cadastrar Produto</button>
      </form>
      <div className="back-link">
        <Link to="/">Voltar para a Listagem</Link>
      </div>
    </div>
  );
};

export default ProductForm;
