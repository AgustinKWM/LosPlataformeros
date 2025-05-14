const express = require('express');
const router = express.Router();
const marcaController = require('../controllers/marcacontroller');

router.post('/crear', marcaController.crearMarca);
router.put('/editar/:id', marcaController.editarMarca);
router.delete('/eliminar/:id', marcaController.eliminarMarca);
router.get('/listar', marcaController.listadoMarcas);
router.get('/:id', marcaController.obtenerMarca);


module.exports = router;
