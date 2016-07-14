var app = app || {};

(function () {

	this.addEventListener('READY', handleReady, false);
	app.Animation.initialize();
	app.Banner.initialize();

	function handleReady(e) {
		console.log("READY: " + e);
		app.Animation.start();
	}

})();
