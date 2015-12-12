var app = app || {}; 


app.Banner = (function () { 

    // --------------------------------------------------------------------------------------
    // check to see if Enabler has initialized
    function initialize() {
        if (Enabler.isInitialized()) {
            enablerInitHandler();
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
        dispatchEvent(new Event("READY"));

        if (Enabler.isPageLoaded()) {
            politeInit();
        } 
        else {
            Enabler.addEventListener(
                studio.events.StudioEvent.PAGE_LOADED, 
                handlePoliteInit
            );
        }
    }

    // --------------------------------------------------------------------------------------
    // Runs when the page is completely loaded.     
    function handlePoliteInit() {  
        // Add your code to load creative assets or begin creative animation.
        dispatchEvent(new Event("POLITE_READY"));
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return { 
        initialize:initialize    
    }
})();