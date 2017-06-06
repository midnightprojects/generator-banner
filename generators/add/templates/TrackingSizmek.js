var app = app || {};


app.Tracking = (function () {

    // --------------------------------------------------------------------------------------
    // check to see if EB has initialized
    function initialize() {
        if (!EB.isInitialized()) {
            EB.addEventListener(
                EBG.EventName.EB_INITIALIZED,
                handleEBInit
            );
        }
        else {
            handleEBInit();
        }
    }

    // --------------------------------------------------------------------------------------
    // Runs when EB is ready.
    function handleEBInit() {
        // Create the event.
        var event = document.createEvent('Event');
        event.initEvent('READY', true, true);
        document.dispatchEvent(event);

        document.getElementById('button-exit').addEventListener('click', handleExit, false);
    }

    // --------------------------------------------------------------------------------------
    function handleExit(e) {
        EB.clickthrough();
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize:initialize
    }
})();
