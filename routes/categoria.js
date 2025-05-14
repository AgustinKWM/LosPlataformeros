const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriacontroller');

router.post('/crear', categoriaController.crearCategoria);               
router.put('/editar/:id', categoriaController.editarCategoria);         
router.delete('/eliminar/:id', categoriaController.eliminarCategoria);
router.get('/listar', categoriaController.listarCategoria);  
router.get('/:id', categoriaController.obtenerCategoria);       
          

module.exports = router;
