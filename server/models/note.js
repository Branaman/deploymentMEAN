var mongoose = require('mongoose');

var taskSchema= new mongoose.Schema({
    id:{type: Number},
    title:{type:String},
    content:{type:String},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('note', taskSchema);
