const ReservaModel = require('../models/ReservaModel');
const db = require('../config/database');

const ReservaController = {
  async listar(req, res) {
    const { rows: salas } = await db.query('SELECT * FROM Salas');
    const { rows: horarios } = await db.query('SELECT * FROM Horarios_Disponiveis');
    const reservas = await ReservaModel.listarReservas();
    res.render('layout/admin', {
      reservas,
      salas,
      horarios
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
  async deletar(req, res) {
    const { id } = req.params;
    await ReservaModel.deletarReserva(id);
    res.redirect('/reservas');
  },
  async visualizarReservas(req, res) {
    idUsuario = req.session.user.id;
    const reservas = await ReservaModel.listarReservasPorUsuario(idUsuario)
    res.render('layout/main', {
      reservas,
      content: '../pages/reservas'
    });
  },


 async  criarReserva(req, res) {
  try {
    const { numero_sala, id_horario } = req.body;

    const id_usuario = req.session.user.id;
    const identificador_grupo = req.session.user.grupo;

    // Verifica se já há reserva do grupo
    const jaReservado = await ReservaModel.verificarGrupoNoHorario(
      parseInt(id_horario),
      identificador_grupo
    );
    if (jaReservado) {
      req.session.erro = 'Alguém do seu grupo já reservou neste horário.';
      return res.redirect('/reservas');
    }

    // ⚠️ Use parseInt para garantir que sejam inteiros
    const novaReserva = await ReservaModel.criarReserva(
      parseInt(numero_sala),
      id_usuario,
      identificador_grupo
    );

    const id_reserva = novaReserva.rows[0].id_reserva;

    await ReservaModel.vincularHorario(parseInt(id_horario), id_reserva);

    res.redirect('/reservas');
  } catch (error) {
    console.error('Erro ao criar reserva:', error);
    res.status(500).send('Erro ao criar reserva');
  }
}

}

module.exports = ReservaController;