var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		t.set("#title", {scale:0});
		t.set("#caption", {scale:0});
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
		t.to("#title", 1, {scale:1, ease:Cubic.easeInOut});
		t.to("#caption", 1, {scale:1, ease:Cubic.easeInOut});
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
