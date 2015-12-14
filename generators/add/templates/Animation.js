var app = app || {}; 


app.Animation = (function () {

	var title;
	var caption;

	function init() {
		title = document.getElementById('title');
		caption = document.getElementById('caption');

		TweenLite.set(title, {scale:0});
		TweenLite.set(caption, {scale:0});
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
		console.log("starting animation");

		init();

		TweenLite.to(title, 1, {scale:1, ease:Cubic.easeInOut});
		TweenLite.to(caption, 1, {scale:1, ease:Cubic.easeInOut});
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