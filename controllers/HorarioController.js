
const { errorMonitor } = require("supertest/lib/test");
const ReservaModel = require("../models/ReservaModel");

const HorariosController = {
  async listar(req, res) {
    const room_id = req.session.room_id;
    const horarios = await ReservaModel.verificarHorariosPorSala(room_id);
    console.log(horarios)
    res.render('layout/main', {
      content: '../pages/horario',
      room_id,
      horarios, 
      erro: null
    });
  },
  async reservarSala(req, res) {
    const número_sala = req.body.número_sala;
    const id_usuário = req.session.user.id;
    const identificador_grupo_reservas = req.session.user.grupo;
    const id_horario = req.body.id_horario;

    // Verifica se alguém do grupo já reservou essa sala nesse horário
    const reservaExistente = await ReservaModel.verificarReservaDoGrupo( identificador_grupo_reservas);
    const room_id = req.session.room_id;
    const horarios = await ReservaModel.verificarHorariosPorSala(room_id);

    if (reservaExistente.rows.length > 0) {
      // Se já houver reserva, impede
      return res.render('layout/main', {
      content: '../pages/horario',
      room_id,
      horarios, 
      erro: 'Já existe uma reserva para este grupo nesse horário.'
    });
    }

    // Se não houver, cria nova reserva
    const novaReserva = await ReservaModel.reservarSala(número_sala, id_usuário, identificador_grupo_reservas);
    const id_reserva = novaReserva.rows[0].id_reserva;

    await ReservaModel.definirReserva(id_horario, id_reserva);

    return res.redirect('/rooms');
  }
}

module.exports = HorariosController;