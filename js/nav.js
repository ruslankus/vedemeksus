$(document).ready(function(e) {
	
	$('.nav li a').click(function(e) {
        console.log(this);
		var fallen_block = $('.top-block');
		fallen_block.addClass("felt");
		return false
    });
    
});