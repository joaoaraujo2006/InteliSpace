const express = require('express');
const router = express.Router();
const ReservaController = require('../controllers/ReservaController');
const LoginController = require('../controllers/LoginController');
const RoomsController = require('../controllers/roomsController');
const HorariosController = require('../controllers/HorarioController')
const requireLogin = require('../middlewares/auth');
// rota POST para algum form (se tiver)

router.get('/reservas', requireLogin, ReservaController.listar);
router.post('/reservas', requireLogin, ReservaController.criarReserva);
router.post('/reservas/edit/:id', requireLogin,  ReservaController.editar);
router.post('/reservas/delete/:id', requireLogin,  ReservaController.deletar);

router.get('/', LoginController.listar);
router.post('/', LoginController.verificar);

router.get('/rooms', requireLogin, RoomsController.listar)
router.post('/selectRoom', requireLogin,  RoomsController.store);

router.get('/horario', requireLogin, HorariosController.listar);
router.post('/reservar', requireLogin, HorariosController.reservarSala);

router.get('/reservados', requireLogin, ReservaController.visualizarReservas)

module.exports = router;