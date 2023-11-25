var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

/*para listar novedades*/
router.get('/', async function (req,res,next) {

  var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    novedades
  });
});

router.get('/agregar',(req,res,next) =>{
  res.render('admin/agregar', {
    layout:'admin/layout'
  });
});

router.post('/agregar', async (req, res, next) => {
  try {
    if (req.body.numero != "" && req.body.fecha != "" && req.body.salida != "" && req.body.arribo != "") {
      await novedadesModel.insertNovedad(req.body);
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
})

module.exports = router;