var app = app || {}; 


app.Banner = (function () { 

    // --------------------------------------------------------------------------------------
    // initialize
    function initialize() {
        dispatchEvent(new Event("READY"));
        document.getElementById('button-exit').addEventListener('click', handleExit, false);
    }

    // --------------------------------------------------------------------------------------
    function handleExit(e) {
        console.log("clicked");
        window.open(clickTag, "_blank");
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return { 
        initialize:initialize    
    }
    
})();