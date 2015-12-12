var app = app || {}; 


app.Animation = (function () {

	function init() {

	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
		console.log("starting animation");
	} 

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		start:start, 
		stop:stop
	}


})();