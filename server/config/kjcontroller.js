console.log("inside kjcontroller");

module.exports = (function(){
	return {
		index: function(request, response){
			response.json({
				"firstName" : "Kwame", "lastName" : "Johnson"})
		}
	}
})();
