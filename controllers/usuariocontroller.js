const usuarioModel = require('../models/usuariomodel');

const obtenerUsuarios = (req, res) => {
    const id = req.params.id;
    usuarioModel.obtenerUsuarios(id, (err, resultados) => {
        if (err) return res.status(500).json({ error: 'Error en el servidor' });

        if (resultados.length === 0) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        res.status(200).json(resultados[0]);
    });
};

const listarUsuarios = (req, res) => {
    usuarioModel.listarUsuarios((err, resultados) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener usuarios' });
        }
        res.status(200).json(resultados);
    });
};

const crearUsuario = (req, res) => {
    const usuario = req.body;

    usuarioModel.verificarUsuarioDuplicado(usuario, (err, resultados) => {
        if (err) {
            return res.status(500).json({ message: 'Error en la verificación de duplicados', error: err });
        }

        if (resultados.length > 0) {
            return res.status(409).json({ message: 'Usuario duplicado. Ya existe un usuario con los mismos datos.' });
        }

        usuarioModel.crearUsuario(usuario, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error al crear el usuario', error: err });
            }
            res.status(201).json({ message: 'Usuario creado correctamente', data: result });
        });
    });
};

const editarUsuario = (req, res) => {
    const { id } = req.params;
    const datos = req.body;

    usuarioModel.editarUsuario(id, datos, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al editar el usuario', error: err });
        }
        res.status(200).json({ message: 'Usuario editado correctamente', data: result });
    });
};

const eliminarUsuario = (req, res) => {
    const { id } = req.params;

    usuarioModel.eliminarUsuario(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al eliminar el usuario', error: err });
        }
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    });
};

module.exports = {
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
    obtenerUsuarios,
    listarUsuarios
};
