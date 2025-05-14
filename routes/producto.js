const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productocontroller');

router.post('/crear', productoController.crearProducto);
router.put('/editar/:id', productoController.editarProducto);
router.delete('/eliminar/:id', productoController.eliminarProducto);
router.get('/listar', productoController.listarProductos);       
router.get('/:id', productoController.obtenerProductos);  

module.exports = router;
