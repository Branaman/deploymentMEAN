var express=require('express'),
app = express(),
path = require('path');
app.use(express.static(path.join(__dirname, '/public/dist')));
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8147, function() {});
