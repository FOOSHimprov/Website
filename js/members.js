'use strict'

$(document).ready(function() {
	initializePage();
});

function initializePage() {
	buildNavBar();

	//Create row system for dispalying in grid
	var htmlString = "<div class='row'>";

	for(var i = 0; i < data.allMembers.length; ++i) {
		//Build foundation for figure
		htmlString += "<div class='col-xs-6 col-sm-4 col-md-3 member'><figure align='center'>";

		//Add image to figure
		htmlString += "<img src='img/Members/" + data.allMembers[i].image + "' class='img-circle'>";

		//Add caption to figure
		htmlString += "<figcaption>" + data.allMembers[i].name + "<br>" + data.allMembers[i].year + " Year<br>(" + data.allMembers[i].fooshYear + " Year FOOSH)<br>" + data.allMembers[i].college + "</figcaption>";

		//End member figure
		htmlString += "</figure></div>";
	}

	//Finish html code for grid
	htmlString += "</div></div>";

	$('#members-grid').html(htmlString);

	buildSocialMedia();
}