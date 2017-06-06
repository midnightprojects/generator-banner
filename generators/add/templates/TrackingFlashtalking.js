var app = app || {};


app.Tracking = (function () {

    var button;

    // --------------------------------------------------------------------------------------
    function initialize() {
        button = myFT.$("#button-exit");
        myFT.applyClickTag(button, 1);

        var event = document.createEvent('Event');
        event.initEvent('READY', true, true);
        document.dispatchEvent(event);
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize:initialize
    }
})();
