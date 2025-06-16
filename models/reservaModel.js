const db = require('../config/database');

const ReservaModel = {
async  criarReserva(numero_sala, id_usuario, grupo) {
  return await db.query(
    'INSERT INTO Reservas (Número_Sala, ID_Usuário, Identificador_Grupo_Reservas) VALUES ($1, $2, $3) RETURNING ID_Reserva',
    [numero_sala, id_usuario, grupo]
  );
},

async vincularHorario(id_horario, id_reserva) {
  return await db.query(
    'INSERT INTO Horarios_Reservados (ID_Horario, ID_Reserva, Estado) VALUES ($1, $2, true)',
    [id_horario, id_reserva]
  );
},

async verificarGrupoNoHorario(id_horario, grupo) {
  const { rows } = await db.query(`
    SELECT r.* FROM Reservas r
    JOIN Horarios_Reservados hr ON r.ID_Reserva = hr.ID_Reserva
    WHERE hr.ID_Horario = $1 AND r.Identificador_Grupo_Reservas = $2
  `, [id_horario, grupo]);

  return rows.length > 0;
},

  async listarReservas() {
    const result = await db.query(`SELECT 
    r.ID_Reserva,
    r.Número_Sala,
    r.Identificador_Grupo_Reservas,
    COALESCE(ra.Nome_Aluno, rf.Nome) AS Nome_Usuario,
    hd.Horario_Inicio,
    hd.Horario_Fim
FROM Reservas r
LEFT JOIN Reservante_Aluno ra ON r.ID_Usuário = ra.RA::VARCHAR
LEFT JOIN Reservante_Funcionário rf ON r.ID_Usuário = rf.ID::VARCHAR
JOIN Horarios_Reservados hr ON r.ID_Reserva = hr.ID_Reserva
JOIN Horarios_Disponiveis hd ON hr.ID_Horario = hd.ID_Horario;
`
    );
    return result.rows;
  },

  async editarReserva(id_reserva, { número_sala, horário }) {
    const result = await db.query(`
    UPDATE Reservas
    SET Número_Sala = $1
    WHERE ID_Reserva = $2
  `, [número_sala, id_reserva]);

    return result.rowCount > 0;
  },

  async deletarReserva(id_reserva) {
    await db.query('DELETE FROM Horarios_Reservados WHERE ID_Reserva = $1', [id_reserva]);
    await db.query('DELETE FROM Reservas WHERE ID_Reserva = $1', [id_reserva]);
  },
  async verificarReservaPorSala() {
    const result = await db.query(`
    SELECT
  s.Número_Sala,
  EXISTS (
    SELECT 1
    FROM Horarios_Disponiveis hd
    WHERE hd.ID_Horario NOT IN (
      SELECT hr.ID_Horario
      FROM Reservas r
      JOIN Horarios_Reservados hr ON r.ID_Reserva = hr.ID_Reserva
      WHERE r.Número_Sala = s.Número_Sala AND hr.Estado = TRUE
    )
  ) AS Tem_Horario_Disponivel
FROM Salas s
ORDER BY s.Número_Sala;
`
    )
    return result.rows;
  },
  async verificarHorariosPorSala(id) {
    const result = await db.query(
      `
    SELECT h.ID_Horario, h.Horario_Inicio
FROM Horarios_Disponiveis h
WHERE NOT EXISTS (
    SELECT 1
    FROM Reservas r
    JOIN Horarios_Reservados hr ON r.ID_Reserva = hr.ID_Reserva
    WHERE r.Número_Sala = $1
      AND hr.ID_Horario = h.ID_Horario
      AND hr.Estado = TRUE
)
ORDER BY h.Horario_Inicio;
  `, [id])
    return result.rows;
  },
  async reservarSala(número_sala, id_usuário, identificador_grupo_reservas) {
    const result = await db.query(
      `
      INSERT INTO Reservas (Número_Sala, ID_Usuário, Identificador_Grupo_Reservas)
      VALUES ($1, $2, $3)
      RETURNING ID_Reserva
    `, [número_sala, id_usuário, identificador_grupo_reservas]
    )
    return result;
  },
  async definirReserva(id_horario, id_reserva) {
    const result = await db.query(' INSERT INTO Horarios_Reservados (ID_Horario, ID_Reserva, Estado) VALUES ($1, $2, true)',
      [id_horario, id_reserva]
    )
    return result
  },
  async listarReservasPorUsuario(idUsuario) {
    const result = await db.query(`
    SELECT 
      r.ID_Reserva,
      r.Número_Sala,
      r.Identificador_Grupo_Reservas,
      COALESCE(ra.Nome_Aluno, rf.Nome) AS Nome_Usuario,
      hd.Horario_Inicio,
      hd.Horario_Fim
    FROM Reservas r
    LEFT JOIN Reservante_Aluno ra ON r.ID_Usuário = ra.RA::VARCHAR
    LEFT JOIN Reservante_Funcionário rf ON r.ID_Usuário = rf.ID::VARCHAR
    JOIN Horarios_Reservados hr ON r.ID_Reserva = hr.ID_Reserva
    JOIN Horarios_Disponiveis hd ON hr.ID_Horario = hd.ID_Horario
    WHERE r.ID_Usuário = $1
  `, [idUsuario]);

    return result.rows;
  },
  async verificarReservaDoGrupo( grupo_id) {
    return db.query(`
    SELECT * FROM reservas
    WHERE Identificador_Grupo_Reservas  = $1
  `, [ grupo_id]);
  }
}
module.exports = ReservaModel;
