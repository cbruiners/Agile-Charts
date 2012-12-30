	$(function() {
		$("#accordion" ).accordion();
		if (isMobileDevice() == true) {
			$('div.defaultcharts').toggleClass('largecharts')
		}
	});
	
	function isMobileDevice(){
    	return (
        	(navigator.userAgent.toLowerCase().indexOf("ipad") > -1) ||
        	(navigator.userAgent.toLowerCase().indexOf("iphone") > -1) ||
        	(navigator.userAgent.toLowerCase().indexOf("ipod") > -1) ||
        	navigator.userAgent.toLowerCase().indexOf("android")
    	);
	}
