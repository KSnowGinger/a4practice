$(document).ready(function() {
	
	$("p").hide();
	$("#griffinpic").hide();
	
	$("h1").click(function()	{

		$(this).next().fadeToggle(1000);

	});

});

/*start of jq02 how to use buttons and selectors */

$("#testbutton").click{function() {
	$("strong").css("background-color","#FF0000");

	});

});
