import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = () => {
    axios.get('http://localhost:5000/produtos')
      .then(response => {
        setProdutos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar produtos:', error);
      });
  };

  const removerProduto = (id) => {
    axios.delete(`http://localhost:5000/produtos/${id}`)
      .then(() => {
        fetchProdutos();  // Atualiza a lista após remoção
      })
      .catch(error => {
        console.error('Erro ao remover produto:', error);
      });
  };

  return (
    <div className="container">
      <h1>Lista de Produtos</h1>
      <Link to="/novo-produto">
        <button className="add-button">Cadastrar Novo Produto</button>
      </Link>
      <table className="product-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.sort((a, b) => a.valor - b.valor).map(produto => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>{produto.valor}</td>
              <td>
                <button 
                  className="remove-button"
                  onClick={() => removerProduto(produto.id)}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

