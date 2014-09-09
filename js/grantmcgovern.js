var s = skrollr.init();

var work = new ScrollToggle($('#my_work').position().top, function () {
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

var workExperience = new ScrollToggle($('#workexperience').position().top, function () {
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