<img src='./assets/wad/logo.png'/>



# 📦 Inteli Space

O InteliSpace é um aplicativo do Instituto de Tecnologia e Liderança (Inteli) desenvolvido para facilitar a reserva de salas de estudo (R01 a R10) por membros da comunidade acadêmica — alunos, professores e funcionários.

A plataforma automatiza o processo de alocação, evitando conflitos e promovendo o uso equilibrado dos espaços. Alunos precisam informar o ateliê e grupo ao qual pertencem, garantindo que integrantes do mesmo grupo não reservem salas separadas.

Cada pessoa só pode reservar uma sala por até uma hora por dia, promovendo rotatividade. Além disso, alunos só podem fazer reservas conectados à rede do Inteli.


## Requisitos

- Node.js
- PostgreSQL 

## Instalação

1. **Clonar o repositório:**

```bash
   git clone https://github.com/joaoaraujo2006/InteliSpace/
   cd InteliSpace
```

2. **Instalar as dependências:**
    
```bash
npm install
npm install express
```

3. **Rode o banco de dados**
```bash
node server.js
```


4. **Inicie o aplicativo**
```bash
node app.js
```
     

    

Funcionalidades
---------------

* **Padrão MVC:** Estrutura organizada em Model, View e Controller.
* **PostgreSQL:** Banco de dados relacional utilizado para persistência dos dados.
* **UUID:** Utilização de UUID como chave primária na tabela `users`.
* **Scripts com `nodemon`:** Utilização do `nodemon` para reiniciar automaticamente o servidor após alterações no código.
* **Testes:** Inclui estrutura básica para testes automatizados.


Estrutura de Diretórios
-----------------------

```
InteliSpace/
│
├── assets/                # Arquivos de visualização do projeto/documentação
├── config/                # Arquivos de configuração (ex: conexão com banco)
│   └── database.js
├── controllers/           # Lógica de controle das requisições
│   └── HomeController.js
├── documentos/ 
│   └── PI-WAD.md
├── models/                # Definição de modelos de dados (estrutura do banco)
│   └── User.js
├── routes/                # Definição das rotas do sistema
│   └── index.js
├── services/              # Serviços auxiliares do sistema
│   └── userService.js
├── assets/                # Arquivos públicos como imagens e fontes
├── scripts/               # Arquivos de JavaScript públicos
│   └── init.sql
├── styles/                # Arquivos CSS públicos
├── tests/                 # Arquivos de testes unitários
│   └── example.test.js
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env.example           # Arquivo de exemplo para variáveis de ambiente
├── jest.config.js         # Arquivo de configuração do Jest
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── readme.md              # Documentação do projeto (Markdown)
├── server.js              # Arquivo principal que inicializa o servidor
└── rest.http              # Teste de endpoints (opcional)

```


Contribuição
------------

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

Licença
-------

Este projeto está licenciado sob a Licença MIT.

Este README.md fornece uma visão geral clara do boilerplate, incluindo instruções de instalação, configuração do banco de dados, funcionalidades principais, scripts disponíveis, estrutura de diretórios, como contribuir e informações de licença. Certifique-se de personalizar as seções com detalhes específicos do seu projeto conforme necessário.