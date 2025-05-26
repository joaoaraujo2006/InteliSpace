const express = require('express');
const router = express.Router();
const ReservaController = require('../controllers/ReservaController');


// rota POST para algum form (se tiver)

router.get('/reservas', ReservaController.listar);
router.post('/reservas', ReservaController.criar);
router.post('/reservas/edit/:id',  ReservaController.editar);
router.post('/reservas/delete/:id',  ReservaController.deletar);
module.exports = router;