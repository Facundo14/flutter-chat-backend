const { response } = require('express');
const Mensaje = require('../models/mensaje');

const obtenerchat  = async (req, res = response) => {

   const miId = req.uid;
   const mensajesDe = req.params.de;


   //Para obtener los ultimos 3 mensajes
//    const last30 = await Mensaje.find({
//        $or: [{de: miId, para: mensajesDe}, {de:mensajesDe, para:miId}]
//    })
//    .sort({createdAt: 'desc'})
//    .limit(30);

   // Para obtener todos
   const mensajes = await Mensaje.find({
    $or: [{de: miId, para: mensajesDe}, {de:mensajesDe, para:miId}]
   })
   .sort({createdAt: 'desc'});
   res.json({
       ok: true,
       mensajes: mensajes
   })

}

module.exports = {
    obtenerchat
}