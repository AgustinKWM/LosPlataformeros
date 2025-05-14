const tarjetaModel = require('../models/tarjetamodel');

const crearTarjeta = (req, res) => {
    const tarjeta = req.body;
    tarjetaModel.crearTarjeta(tarjeta, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al crear la tarjeta', error: err });
        }
        res.status(201).json({ message: 'Tarjeta creada correctamente', data: result });
    });
};

const editarTarjeta = (req, res) => {
    const { id } = req.params;
    const datos = req.body;
    tarjetaModel.editarTarjeta(id, datos, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al editar la tarjeta', error: err });
        }
        res.status(200).json({ message: 'Tarjeta editada correctamente', data: result });
    });
};

const eliminarTarjeta = (req, res) => {
    const { id } = req.params;
    tarjetaModel.eliminarTarjeta(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al eliminar la tarjeta', error: err });
        }
        res.status(200).json({ message: 'Tarjeta eliminada correctamente' });
    });
};

const obtenerTarjeta = (req, res) => {
    const { id } = req.params;
    tarjetaModel.obtenerTarjeta(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener la tarjeta', error: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Tarjeta no encontrada' });
        }
        res.status(200).json({ data: result[0] });
    });
};

const listarTarjeta = (req, res) => {
    tarjetaModel.listarTarjeta((err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al listar las tarjetas', error: err });
        }
        res.status(200).json({ data: result });
    });
};

module.exports = {
    crearTarjeta,
    editarTarjeta,
    eliminarTarjeta,
    obtenerTarjeta,
    listarTarjeta
};
