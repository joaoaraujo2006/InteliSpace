const express = require('express');
const router = express.Router();
const ReservaController = require('../controllers/ReservaController');
const LoginController = require('../controllers/LoginController');
const RoomsController = require('../controllers/roomsController');
const HorariosController = require('../controllers/HorarioController')
// rota POST para algum form (se tiver)

router.get('/reservas', ReservaController.listar);
router.post('/reservas', ReservaController.criar);
router.post('/reservas/edit/:id',  ReservaController.editar);
router.post('/reservas/delete/:id',  ReservaController.deletar);

router.get('/', LoginController.listar);
router.post('/', LoginController.verificar);

router.get('/rooms', RoomsController.listar)
router.post('/selectRoom', RoomsController.store);

router.get('/horario', HorariosController.listar);
router.post('/reservar', HorariosController.reservarSala);

router.get('/reservados', ReservaController.visualizarReservas)

module.exports = router;