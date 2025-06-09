const ReservaModel = require("../models/ReservaModel");
const { verificarReservaPorSala } = require("../models/ReservaModel");
const { verificar } = require("./LoginController");

const RoomsController = {
  async listar(req, res) {
    const estadoSala = await ReservaModel.verificarReservaPorSala();
    console.log(estadoSala)
    res.render('layout/main', {
      content: '../pages/rooms',
      estadoSala
    });
  },
  async store(req, res) {
    const room_id = req.body.room_id;
    // Store the school_id in session only if the user is a guardian
    req.session.room_id = room_id
    return res.redirect('/horario');
  },

}

module.exports = RoomsController;