
const ReservaModel = require("../models/ReservaModel");

const HorariosController = {
  async listar(req, res) {
    const room_id = req.session.room_id;
    const horarios = await ReservaModel.verificarHorariosPorSala(room_id);
    console.log(horarios)
    res.render('layout/main', {
      content: '../pages/horario',
      room_id,
      horarios
    });
  },
  async reservarSala(req, res){
    const número_sala = req.body.número_sala;
    id_usuário = req.session.user.id;
    identificador_grupo_reservas = req.session.user.grupo;
    const novaReserva = await ReservaModel.reservarSala(número_sala, id_usuário, identificador_grupo_reservas);

    id_reserva = novaReserva.rows[0].id_reserva;
    id_horario = req.body.id_horario;
    console.log(novaReserva.id_reserva)
    const definir = await ReservaModel.definirReserva(id_horario, id_reserva)

    return res.redirect('/rooms')
  }
}

module.exports = HorariosController;