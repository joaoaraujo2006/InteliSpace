//const ReservaModel = require('../models/ReservaModel');

const LoginModel = require("../models/loginModel");

const LoginController = {
  async listar(req, res) {
    res.render('pages/login', {
      error: null
    })
    
  },
  async verificar(req, res) {
    const { email, password } = req.body;

    // Try to find user as a guardian first
    let user = await LoginModel.findAlunoByEmail(email);
    role = 'aluno';

    console.log(user)
    if (!user) {
      user = await LoginModel.findFuncionarioByEmail(email);
      role = 'funcionario';
    }

    if (!user) {
      // Render error if user is not found
      return res.render('pages/login', {
        error: 'E-mail não encontrado.'
      });
    }

    // Compare password directly (no hashing for demonstration)
    const storedPassword = role === 'funcionario'
      ? user.senha_funcionário
      : user.senha_aluno;

    if (password !== storedPassword) {
      // Render error if password is incorrect
      return res.render('pages/login', {
        error: 'Senha incorreta.'
      });
    }

    // Save user info and role in the session
    req.session.user = {
      id: role === 'funcionário' ? user.cpf : user.ra,
      name: role === 'funcionário' ? user.nome : user.nome_aluno,
      role,
      grupo: role === 'funcionário' ? null : user.identificador_grupo,
      turma: role === 'funcionário' ? null : user.número_turma


      // Redirect based on user role
      //if (role === 'guardian') {
      //  return res.redirect('/selectstudent');
      //} else {
      //  return res.redirect('/news');
    }
    res.redirect('/rooms')
  },

}

module.exports = LoginController;