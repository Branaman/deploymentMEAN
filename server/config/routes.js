var mongoose = require('mongoose');
var noteCrontroller = require('../controllers/note.js');
module.exports = (function(app){
  app.get('/notes', noteCrontroller.index);
  app.post('/notes', noteCrontroller.create);
  // app.post('/notes', (req, res, next)=>{
  //   noteCrontroller.create;
  // });
  app.get('/notes/:id', noteCrontroller.show);
  app.delete('/notes/:id', noteCrontroller.destroy);
  app.put('/notes/:id', noteCrontroller.update);
});
