var phearMain = function(page_obj) {
	// This is a function which gives you the first 200
	// variables used in the page
    return page_obj.evaluate (function() {
        var i, envvars = [];
        for (i in window) {
            envvars.push(i);
        }
        return envvars.slice(0, 200);
   });
};
