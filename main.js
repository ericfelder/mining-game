var randomNumber = 0;

$(document).ready(function() {
	$("#mine").click(function() {
		randomNumber = Math.random();

		$("#number").html(randomNumber);
	});
});