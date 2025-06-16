function requireLogin(req, res, next) {
   if (req.session && req.session.user && req.session.user.role === 'aluno' || req.session.user.role === 'funcionario') {
    next();
  } else {
    res.redirect('/');
  }
};

module.exports = requireLogin;