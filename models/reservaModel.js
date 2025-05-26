const db = require('../config/database');

const ReservaModel = {
  
  async criarReserva({ número_sala, horário, id_usuário, identificador_grupo_reservas }) {
    const query = 'INSERT INTO Reservas (Número_Sala, Horário, ID_Usuário, Identificador_Grupo_Reservas) VALUES ($1, $2, $3, $4) RETURNING ID_Reserva';
    const values = [número_sala, horário, id_usuário, identificador_grupo_reservas || null];
    return db.query(query, values);
  },

  async listarReservas() {
   const result = await db.query(`SELECT 
    r.ID_Reserva,
    r.Número_Sala,
    r.Horário,
    r.Identificador_Grupo_Reservas,
    u.Nome AS Nome_Usuario
  FROM Reservas r
  JOIN Usuários u ON r.ID_Usuário = u.ID_Usuario;`
  );
    return result.rows;
  },

  async editarReserva(id_reserva, { número_sala, horário }) {
  const result = await db.query(`
    UPDATE Reservas
    SET Número_Sala = $1,
        Horário = $2
    WHERE ID_Reserva = $3
  `, [número_sala, horário, id_reserva]);

  return result.rowCount > 0;
},

  async deletarReserva(id_reserva) {
    const result = await db.query(`
    DELETE FROM Reservas WHERE ID_Reserva = $1
  `, [id_reserva]);

    return result.rowCount > 0;
  }
}
module.exports = ReservaModel;