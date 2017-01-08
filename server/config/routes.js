var kjcontroller = require('./kjcontroller.js');

console.log("inside routes.js");

module.exports = function(app){

	app.get('/notroot', function(request, response){
		console.log("get request to root route");
		kjcontroller.index(request, response);
	});
}
