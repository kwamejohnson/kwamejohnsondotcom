var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var port = 2017;

app.use(express.static(path.join(__dirname, '/client')));
// app.use(express.static(path.join(root, 'bower_components' )));


app.use(bodyParser.json());

// require('./server/config/mongoose.js');


app.listen(port, function(){
	console.log('now listening on port: ' + port);
})

require('./server/config/routes.js')(app);
