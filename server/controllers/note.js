var mongoose = require('mongoose')
var Note = mongoose.model('note')

module.exports = {
  index: function(req, res){
    var notes = Note.find({}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
      var notes = Note.findOne({id:req.params.id}, function(err,data){
        if (err) {
          res.json (err);
          return;
        }
        res.json(data);
      });
  },
  create: function(req, res){
    var note = new Note(req.body);
    note.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    Note.remove({id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    Note.update({id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
}
