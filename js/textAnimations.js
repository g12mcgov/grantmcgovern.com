$(document).ready(function(){

	var s = skrollr.init();

	var height = $(window).height();

	var work = new ScrollToggle($('#my_work').position().top - height/2, function () {
	    if ($("#my_work:contains('My Work')").length > 0)  {
	    	return;
		} else {
			$('#my_work').append('My Work');
	    	$('#my_work').addClass('animated bounceInLeft');
		}
	}, function () {
		if ($("#my_work:contains('My Work')").length > 0)  {
	    	return;
		}
	});

	var workExperience = new ScrollToggle($('#workexperience').position().top - height/2, function () {
	    if ($("#workexperience:contains('Work Experience')").length > 0)  {
	    	return;
		} else {
			$('#workexperience').append('Work Experience');
	    	$('#workexperience').addClass('animated bounceInRight');
		}
	}, function () {
		if ($("#workexperience:contains('Work Experience')").length > 0)  {
	    	return;
		}
	});

	var workWithMe = new ScrollToggle($('#workwithme').position().top - height/2, function () {
	    if ($("#workwithme:contains('Want to work with me?')").length > 0)  {
	    	return;
		} else {
			$('#workwithme').append('Want to work with me?');
	    	$('#workwithme').addClass('animated bounceInDown');
	    	$('#contactPanel').addClass('animated flash');
		}
	}, function () {
		if ($("#workwithme:contains('Want to work with me?')").length > 0)  {
	    	return;
		}
	});
});