var app = app || {};

(function () {

	this.addEventListener('READY', handleReady, false);
	app.Animation.initialize();
	app.Tracking.initialize();

	function handleReady(e) {
		console.log("READY: " + e);
		app.Animation.start();
	}

})();
