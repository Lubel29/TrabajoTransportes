var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/*para listar novedades*/
router.get('/', async function (req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  novedades = novedades.map(novedad => {
    if (novedad.img_id) {
      const imagen = cloudinary.image(novedad.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'
      });
      return {
        ...novedad,
        imagen
      }
    } else {
      return {
        ...novedad,
        imagen: ''
      }
    }
  });

  res.render('admin/novedades', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    novedades
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

router.post('/agregar', async (req, res, next) => {
  try {
    var img_id = '';
    console.log(req.files.imagen);

    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.numero != "" && req.body.fecha != "" && req.body.salida != "" && req.body.arribo != "") {
      await novedadesModel.insertNovedad({
        ...req.body,
        img_id
      });
      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo la novedad'
    })
  }
});

router.get('/eliminar/:numero', async (req, res, next) => {
  var numero = req.params.numero;

  await novedadesModel.deleteNovedadesByNumero(numero);
  res.redirect('/admin/novedades');
});

/*para q me traiga el diseño con una sola novedad*/

router.get('/modificar/:numero', async (req, res, next) => {
  var numero = req.params.numero;
  console.log(req.params.numero);
  var novedad = await novedadesModel.getNovedadBynumero(numero);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    novedad
  });
});

/*modificar la novedad*/

router.post('/modificar', async (req, res, next) => {
  try {

    let img_id = req.body.img_original;

    let borrar_img_vieja = false;

    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    var obj = {
      fecha: req.body.fecha,
      salida: req.body.salida,
      arribo: req.body.arribo,
      img_id
    }
    // console.log(req.body)

    await novedadesModel.modificarNovedadBynumero(obj, req.body.numero);
    res.redirect('/admin/novedades');

  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico la novedad'
    })
  }
})

module.exports = router;