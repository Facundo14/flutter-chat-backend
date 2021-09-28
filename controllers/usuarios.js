const { response } = require('express');
const Usuario = require('../models/usuario');

const getUsuarios = async (req, res = response) => {

   
    // Paginacion
    const desde = Number(req.query.desde) || 0;
    
    const usuarios = await Usuario
        .find({_id: {$ne: req.uid}}) // retorna todos menos el uid que esta validando con su token (todos menos el que inicia sesion)
        .sort('-online') // Ordena segun el campo con el " - " adelante del campo para que sea de forma descendente
        .skip(desde) // muestra la paginacion
        .limit(20) // limita la cantidad de registros por pagina

    res.json({
        ok: true,
        usuarios,
    });

}

module.exports = {
    getUsuarios
}