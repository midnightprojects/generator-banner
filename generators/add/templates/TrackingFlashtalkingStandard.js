var app = app || {};


app.Tracking = (function () {

    // --------------------------------------------------------------------------------------
    // initialize
    function initialize() {
        // Create the event.
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
