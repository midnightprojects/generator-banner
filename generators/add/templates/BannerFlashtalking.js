var app = app || {}; 


app.Banner = (function () {

    var button; 

    // --------------------------------------------------------------------------------------
    function initialize() {
        button = myFT.$("#button-exit");
        myFT.applyClickTag(button, 1);

        dispatchEvent(new Event("READY"));
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return { 
        initialize:initialize    
    }
})();