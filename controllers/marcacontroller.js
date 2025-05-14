const marcaModel = require('../models/marcamodel');

const crearMarca = (req, res) => {
    const marca = req.body;
    marcaModel.crearMarca(marca, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al crear la marca', error: err });
        }
        res.status(201).json({ message: 'Marca creada correctamente', data: result });
    });
};

const editarMarca = (req, res) => {
    const { id } = req.params;
    const datos = req.body;
    marcaModel.editarMarca(id, datos, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al editar la marca', error: err });
        }
        res.status(200).json({ message: 'Marca editada correctamente', data: result });
    });
};

const eliminarMarca = (req, res) => {
    const { id } = req.params;
    marcaModel.eliminarMarca(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al eliminar la marca', error: err });
        }
        res.status(200).json({ message: 'Marca eliminada correctamente' });
    });
};

const listadoMarcas = (req, res) => {
    marcaModel.listadoMarcas((err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener las marcas', error: err });
        }
        res.status(200).json({ data: result });
    });
};

const obtenerMarca = (req, res) => {
    const { id } = req.params;
    marcaModel.obtenerMarca(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener la marca', error: err });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: 'Marca no encontrada' });
        }

        res.status(200).json({ data: result[0] });
    });
};

module.exports = {
    crearMarca,
    editarMarca,
    eliminarMarca,
    listadoMarcas,
    obtenerMarca
};
