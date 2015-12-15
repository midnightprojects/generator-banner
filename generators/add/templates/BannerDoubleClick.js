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

        document.getElementById('button-exit').addEventListener('click', handleExit, false);

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
        dispatchEvent(new Event("AD_VISIBLE"));  
    }

    // --------------------------------------------------------------------------------------
    // Runs when the page is completely loaded.     
    function handlePoliteInit() {  
        dispatchEvent(new Event("POLITE_READY"));        
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