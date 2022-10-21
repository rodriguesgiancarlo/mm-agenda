# MM Agenda

Projeto de API em NodeJS e cliente desenvolvido com ReactJS para gerenciar as informações de um time (nome, e-mail e telefone).

Funcionalidades:

- Adicionar membros;
- Alterar membros;
- Remover membros;
- Listar todos os membros (com campo para filtrar resultados usando debounce);

## Sumário

1. [Arquitetura](#arquitetura)
2. [Instalação](#instalação)
3. [Executar o projeto](#executar-o-projeto)

<br />
<br>

![Alt text](images/mm-agenda.png?raw=true "MM Agenda")

<br>

## Arquitetura

O projeto é dividido em duas partes: cliente e servidor. Na raiz deste repositório, o diretório _mm-agenda-frontend_ contém o código-fonte do cliente enquanto _mm-agenda-backend_ contém o código-fonte do servidor. As principais tecnologias utilizadas foram as seguintes:

### Cliente

- [ReactJS](https://pt-br.reactjs.org/)
- [Chakra UI](https://chakra-ui.com/) - Biblioteca de componentes para criar aplicações com ReactJS
- [react-icons](https://react-icons.github.io/react-icons) - Ícones
- [react-input-mask](https://www.npmjs.com/package/react-input-mask) - Criação de campos de formulário com máscaras
- [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start) - Navegação entre páginas de aplicações SPA

### Servidor

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/) - Framework para criação de servidores HTTP com NodeJS
- [NeDB](https://github.com/louischatriot/nedb) - Banco de dados em memória
- [Yup](https://github.com/jquense/yup) - Validação de objetos em JS
- [Winston](https://github.com/winstonjs/winston) - Logger para registrar requisições e erros dentro da aplicação

<br />

## Instalação

> Para executar este projeto é necessário NodeJS versão **16.16.0** (ou superior) **OU** Yarn versão **1.22.5** (ou superior)

Para instalar as dependências do projeto é necessário acessar cada diretório (cliente e servidor) e executar o comando `npm install`. Isso é feito com os seguintes comandos (assumindo que você está no diretório raiz do projeto):

`cd mm-agenda-frontend`

`npm install`

`cd ..`

`cd mm-agenda-backend`

`npm install`

Depois de instaladas as dependências basta executar o projeto.

<br>

## Executar o projeto

Para executar o projeto é necessário acessar novamente cada diretório e executar o comando `npm run start` **dentro de cada um deles** (isso vai exigir dois terminais em execução, cuidado para não encerrá-los). Estes comandos vão iniciar a API do servidor, a qual responderá às requisições enviadas a [http://localhost:8080/api](http://localhost:8080/api), e o cliente, o qual deverá ser acessado no seu navegador com o seguinte endereço: [http://localhost:3000](http://localhost:3000).
