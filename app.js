// server.js
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index');
const session = require('express-session');

// Usando session para guardar informações
app.use(session({
  secret: 'sua-chave-secreta-aqui',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // secure: true only works with HTTPS
}));


// Configurar EJS como view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para ler JSON no corpo da requisição
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Necessário para POST de <form>
app.use(express.json()); // Opcional, usado para APIs com JSON

// Rotas da API 
app.use('/', routes);


// Serve static files from the public directory
app.use(express.static(__dirname + '/public'));

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
// Usando as rotas definidas


