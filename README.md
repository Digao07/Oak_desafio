# Cadastro de Produtos

Este projeto é uma aplicação web de cadastro de produtos, que permite aos usuários adicionar, listar e remover produtos de um banco de dados. A aplicação é construída com React no frontend e Node.js no backend, utilizando Sequelize para interagir com um banco de dados MySQL.

## Tecnologias Utilizadas

### Frontend:
- React
- Chakra UI
- Axios
- React Router

### Backend:
- Node.js
- Express
- Sequelize
- MySQL
- CORS
- Body-parser

## Funcionalidades

- Cadastrar produtos com informações como nome, descrição, valor e disponibilidade.
- Listar todos os produtos cadastrados.
- Remover produtos da lista.

## Instruções para Execução

### 1. Clonar o repositório
```bash
git clone https://github.com/seu_usuario/cadastro-produtos.git
cd cadastro-produtos
```

### 2. Configuração do Backend

1. **Acesse a pasta do backend**:
    ```bash
    cd backend
    ```

2. **Instalar as dependências**:
    ```bash
    npm install
    ```

3. **Configurar o banco de dados**:
    - Crie um banco de dados MySQL.
    - Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente, como as credenciais do banco de dados.

4. **Executar as migrações para criar as tabelas no banco de dados**:
    ```bash
    npx sequelize db:migrate
    ```

5. **Rodar o servidor backend**:
    ```bash
    npm start
    ```
    O backend estará rodando em `http://localhost:5000`.

### 3. Configuração do Frontend

1. **Acesse a pasta do frontend**:
    ```bash
    cd frontend
    ```

2. **Instalar as dependências**:
    ```bash
    npm install
    ```

3. **Rodar o frontend**:
    ```bash
    npm start
    ```
    O frontend estará disponível em `http://localhost:3000`.

### 4. Utilizando a Aplicação
- Com o backend e frontend rodando, acesse `http://localhost:3000` no seu navegador.
- Agora você pode começar a cadastrar, listar e remover produtos!
