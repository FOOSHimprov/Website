'use strict'

$(document).ready(function() {
	initializePage();
});

function initializePage() {
	console.log("In contact.js");
	//Build nav bar
	buildNavBar();

	var htmlString = "";

	for(var i = 0; i < data.boardMembers.length; ++i) {
		//Build row for table
		htmlString += "<tr><td class='member-photo'>";
		//<div class='col-xs-6 col-sm-4 col-md-3 member'><figure align='center'>";

		//Add image to figure
		htmlString += "<img src='img/Board Members/" + data.boardMembers[i].image + "' class='img-circle'/>";

		//Add info to board member
		htmlString += "<td class='member-info'>" + data.boardMembers[i].name + " - " + data.boardMembers[i].position + "<br>" + data.boardMembers[i].year + ", " + data.boardMembers[i].college;

		//End table row
		htmlString += "</td></tr>";
	}

	$('.board-members').html(htmlString);

	//Build social media
	buildSocialMedia();
}