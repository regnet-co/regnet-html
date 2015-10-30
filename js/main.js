var footy, portvin;

/* document */
$(document).ready(function(){

	footy = $("#footy");
	portvin = $("#portvin");

	scrollHandler = onVisibilityChange(footy);
	$(window).on('DOMContentLoaded load resize scroll', scrollHandler); 
	

});





function onVisibilityChange (el) {

	var locked = false;

    return function () {
  

        if(isElementInViewport(el)){
        	if(locked){return;}

        	//var stopRightHere = (el.offsetHeight).toString() + "px";
        	
        	

        	portvin.css({
        		"position": "absolute",
        		"top" :  "calc(" + footy.position().top +"px - 1em)"
        	});

        	locked = true;
        }else{
        	portvin.removeAttr('style');
        	locked = false;
        }

    };
}



//jQuery



function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();


  

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
       	rect.bottom-el.offsetHeight <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}
