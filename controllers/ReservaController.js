const ReservaModel = require('../models/ReservaModel');

const ReservaController = {
  async listar(req, res) {
    const reservas = await ReservaModel.listarReservas();
    res.render('layout/main', {
      reservas,
      content: '../pages/page1'
    });
  },
  async criar(req, res) {
    await ReservaModel.criarReserva(req.body);
    res.redirect('/reservas');
  },
  async editar(req, res) {
    const { id } = req.params;
    await ReservaModel.editarReserva(id, req.body);
    res.redirect('/reservas')
  },
  async deletar(req, res){
    const { id } = req.params;
    await ReservaModel.deletarReserva(id);
    res.redirect('/reservas');
  }
}

module.exports = ReservaController;