# Perguntas e Respostas API

API para criar, visualizar e responder perguntas em um banco de dados.

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Status](#status)
- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Como Usar](#como-usar)
- [Documentação da API](#documentação-da-api)
- [Autor](#autor)

## Tecnologias Utilizadas

<div style="display: flex; flex-direction: row;">
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/node.png" alt="Logo Node.js" width="300"/>
  </div>
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/express.png" alt="Logo Express.js" width="300"/>
  </div>
</div>

## Status

![Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge)

## Descrição

Este projeto consiste em uma API para gerenciamento de perguntas e respostas. Os usuários podem fazer perguntas e responder às perguntas existentes.

## Funcionalidades

- Criação de perguntas.
- Visualização de todas as perguntas.
- Visualização de uma pergunta específica junto com suas respostas.
- Responder a perguntas.

## Como Usar

1. Clone o repositório em sua máquina local:
   git clone <url-do-repositorio>

2. Navegue até a pasta do projeto:
   cd pastaDoArquivo

3. Inicialize o projeto com npm:
   npm init

4. Instale as dependências necessárias:
   npm install express body-parser ejs sequelize sqlite3

5. node main.js
   A API estará rodando no endereço http://localhost:8080.

## Documentação da API

### Endpoints

#### GET /

Este endpoint retorna a lista de todas as perguntas.

##### Retorno:

- Status Code: 200 OK
- Corpo da resposta: Uma lista de objetos JSON, cada um representando uma pergunta com os seguintes atributos:
  - `id` (number): O identificador único da pergunta.
  - `titulo` (string): O título da pergunta.
  - `descricao` (string): A descrição da pergunta.

#### GET /perguntar

Este endpoint renderiza a página para criar uma nova pergunta.

##### Retorno:

- Status Code: 200 OK

#### POST /salvarpergunta

Este endpoint salva uma nova pergunta.

##### Parâmetros:

Corpo da requisição deve conter os seguintes campos:

- `titulo` (string): O título da pergunta.
- `descricao` (string): A descrição da pergunta.

##### Retorno:

- Status Code: 302 Found redirecionando para `/`.

#### GET /pergunta/:id

Este endpoint retorna uma pergunta específica com base no seu ID e suas respostas.

##### Parâmetros:

- `id` (number): O ID da pergunta a ser recuperada.

##### Retorno:

- Status Code: 200 OK se a pergunta for encontrada.
- Status Code: 404 Not Found se a pergunta não for encontrada.
- Corpo da resposta: Um objeto JSON representando a pergunta e uma lista de suas respostas, cada uma com os seguintes atributos:
  - `id` (number): O identificador único da resposta.
  - `corpo` (string): O conteúdo da resposta.
  - `perguntaId` (number): O identificador da pergunta associada.

#### POST /responder

Este endpoint salva uma nova resposta para uma pergunta específica.

##### Parâmetros:

Corpo da requisição deve conter os seguintes campos:

- `corpo` (string): O conteúdo da resposta.
- `pergunta` (number): O ID da pergunta a ser respondida.

##### Retorno:

- Status Code: 302 Found redirecionando para `/pergunta/:id`.

# Autor

Desenvolvido por Diego Franco.
