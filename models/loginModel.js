const db = require('../config/database');

const LoginModel = {
     async findAlunoByEmail(email) {
        const result = await db.query('SELECT * FROM reservante_aluno WHERE email_aluno = $1', [email]);
        return result.rows[0];
    },
    async findFuncionarioByEmail(email) {
        const result = await db.query('SELECT * FROM reservante_funcionário WHERE email_funcionário = $1', [email]);
        return result.rows[0];
    }
}
module.exports = LoginModel;