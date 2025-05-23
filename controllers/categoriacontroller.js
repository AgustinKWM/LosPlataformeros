const categoriaModel = require('../models/categoriamodel');

const crearCategoria = (req, res) => {
    const { nombre, descripcion } = req.body;
    if (!nombre || !descripcion) {
        return res.status(400).json({ message: 'Faltan campos requeridos: nombre y descripcion' });
    }

    const categoria = { nombre, descripcion };
    categoriaModel.crearCategoria(categoria, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al crear la categoría', error: err });
        }
        res.status(201).json({ message: 'Categoría creada correctamente', data: result });
    });
};

const editarCategoria = (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    if (!nombre || !descripcion) {
        return res.status(400).json({ message: 'Faltan campos requeridos: nombre y descripcion' });
    }

    const datos = { nombre, descripcion };
    categoriaModel.editarCategoria(id, datos, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al editar la categoría', error: err });
        }
        res.status(200).json({ message: 'Categoría editada correctamente', data: result });
    });
};

const eliminarCategoria = (req, res) => {
    const { id } = req.params;
    categoriaModel.eliminarCategoria(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al eliminar la categoría', error: err });
        }
        res.status(200).json({ message: 'Categoría eliminada correctamente' });
    });
};

const obtenerCategoria = (req, res) => {
    const { id } = req.params;
    categoriaModel.obtenerCategoria(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener la categoría', error: err });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }

        res.status(200).json({ data: result[0] });
    });
};

const listarCategoria = (req, res) => {
    categoriaModel.listarCategoria((err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener las categorías', error: err });
        }

        res.status(200).json({ data: result });
    });
};

module.exports = {
    crearCategoria,
    editarCategoria,
    eliminarCategoria,
    obtenerCategoria,
    listarCategoria
};
