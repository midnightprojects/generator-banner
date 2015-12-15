var app = app || {}; 




this.addEventListener('READY', handleReady, false);
app.Banner.initialize();

function handleReady(e) {
	console.log("READY: " + e);
	app.Animation.start();
}