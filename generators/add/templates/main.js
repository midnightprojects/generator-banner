var app = app || {}; 


app.Banner.initialize();

this.addEventListener('READY', handleReady, false);

function handleReady(e) {
	console.log("READY: " + e);
	app.Animation.start();
}