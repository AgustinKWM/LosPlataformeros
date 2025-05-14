const express = require('express');
const router = express.Router();
const tarjetaController = require('../controllers/tarjetacontroller');

router.post('/crear', tarjetaController.crearTarjeta);
router.put('/editar/:id', tarjetaController.editarTarjeta);
router.delete('/eliminar/:id', tarjetaController.eliminarTarjeta);
router.get('/listar', tarjetaController.listarTarjeta);
router.get('/:id', tarjetaController.obtenerTarjeta);

module.exports = router;
