'use strict'

$(document).ready(function() {
	initializePage();
});

function initializePage() {
	console.log("In about.js");
	//Build nav bar
	buildNavBar();

	//Build social media
	buildSocialMedia();
}