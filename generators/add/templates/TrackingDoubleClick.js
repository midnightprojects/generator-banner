var app = app || {};


app.Tracking = (function () {

    // --------------------------------------------------------------------------------------
    // check to see if Enabler has initialized
    function initialize() {
        if (Enabler.isInitialized()) {
            handleEnablerInit();
        }
        else {
            Enabler.addEventListener(
                studio.events.StudioEvent.INIT,
                handleEnablerInit
            );
        }
    }

    // --------------------------------------------------------------------------------------
    // Runs when Enabler is ready.
    function handleEnablerInit() {
        document.getElementById('button-exit').addEventListener('click', handleExit, false);

        // Create the event.
        var event = document.createEvent('Event');
        event.initEvent('READY', true, true);
        document.dispatchEvent(event);

        // Check to see if page is loaded
        if (Enabler.isPageLoaded()) {
            politeInit();
        }
        else {
            Enabler.addEventListener(
                studio.events.StudioEvent.PAGE_LOADED,
                handlePoliteInit
            );
        }

        // Check to see if ad is visible on the page
        if (Enabler.isVisible()) {
            handleVisibility();
        }
        else {
            Enabler.addEventListener(
                studio.events.StudioEvent.VISIBLE,
                handleVisibility
            );
        }
    }

    // --------------------------------------------------------------------------------------
    // Load in additional assets or start the animation/video
    function handleVisibility() {
        // Create the event.
        var event = document.createEvent('Event');
        event.initEvent('AD_VISIBLE', true, true);
        document.dispatchEvent(event);
    }

    // --------------------------------------------------------------------------------------
    // Runs when the page is completely loaded.
    function handlePoliteInit() {
        // Create the event.
        var event = document.createEvent('Event');
        event.initEvent('POLITE_READY', true, true);
        document.dispatchEvent(event);
    }

    // --------------------------------------------------------------------------------------
    function handleExit(e) {
        Enabler.exit('Background Exit');
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize:initialize
    }
})();
