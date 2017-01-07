'use strict'

$(document).ready(function() {
	initializePage();
});

function initializePage() {
	//Build nav bar
	buildNavBar();

	//Fill in school year in table's title
	$('#table-title').text(data.schoolYear + " School Year");

	//Table caption
	var htmlString = "<caption align='bottom'>*All information is subject to change without notice</caption>";

	//Table Row Headers
	htmlString += "<tr><th>Week</th><th>Date/Time</th><th>Location</th><th>Theme</th></tr>";

	//Fall Quarter Title
	htmlString += "<tr><td class='quarter' colspan='4'>Fall 2016</td></tr>";

	//Fill in fall shows
	var fallShowString = "";
	for(var i = 0; i < data.fallShows.length; ++i) {
		//Week column
		fallShowString += "<tr><td>Week " + data.fallShows[i].week + "</td>";

		//Date/Time column
		fallShowString += "<td>" + getDateString(new Date(data.fallShows[i].day)) + " at " + data.fallShows[i].time + "</td>";

		//Location column
		fallShowString += "<td>" + data.fallShows[i].location + "</td>";

		//Theme column
		fallShowString += "<td>" + data.fallShows[i].theme + "</td></tr>";
		console.log(fallShowString)
	}
	htmlString += fallShowString;

	//Winter Quarter Title
	htmlString += "<tr><td class='quarter' colspan='4'>Winter 2017</td></tr>";

	//Fill in winter shows
	var winterShowString = "";
	for(var i = 0; i < data.winterShows.length; ++i) {
		//Week column
		winterShowString += "<tr><td>Week " + data.winterShows[i].week + "</td>";

		//Date/Time column
		winterShowString += "<td>" + getDateString(new Date(data.winterShows[i].day)) + " at " + data.winterShows[i].time + "</td>";

		//Location column
		winterShowString += "<td>" + data.winterShows[i].location + "</td>";

		//Theme column
		winterShowString += "<td>" + data.winterShows[i].theme + "</td></tr>";
		console.log(winterShowString)
	}
	htmlString += winterShowString;

	//Spring Quarter Title
	htmlString += "<tr><td class='quarter' colspan='4'>Spring 2017</td></tr>";

	//Fill in spring shows
	var springShowString = "";
	for(var i = 0; i < data.springShows.length; ++i) {
		//Week column
		springShowString += "<tr><td>Week " + data.springShows[i].week + "</td>";

		//Date/Time column
		springShowString += "<td>" + getDateString(new Date(data.springShows[i].day)) + " at " + data.springShows[i].time + "</td>";

		//Location column
		springShowString += "<td>" + data.springShows[i].location + "</td>";

		//Theme column
		springShowString += "<td>" + data.springShows[i].theme + "</td></tr>";
		console.log(springShowString)
	}
	htmlString += springShowString;

	console.log(htmlString);

	$('#show-schedule').html(htmlString);

	//Build social media
	buildSocialMedia();
}

function getDateString(date) {
	var showString = "";
	switch(date.getDay()) {
		case 0:
			showString += "Sunday, ";
			break;
		case 1:
			showString += "Monday, ";
			break;
		case 2:
			showString += "Tuesday, ";
			break;
		case 3:
			showString += "Wednesday, ";
			break;
		case 4:
			showString += "Thursday, ";
			break;
		case 5:
			showString += "Friday, ";
			break;
		case 6:
			showString += "Saturday, ";
			break;
	}

	//Month of next show
	switch(date.getMonth()) {
		case 0:
			showString += "January ";
			break;
		case 1:
			showString += "February ";
			break;
		case 2:
			showString += "March ";
			break;
		case 3:
			showString += "April ";
			break;
		case 4:
			showString += "May ";
			break;
		case 5:
			showString += "June ";
			break;
		case 6: 
			showString += "July ";
			break;
		case 7:
			showString += "August ";
			break;
		case 8:
			showString += "September ";
			break;
		case 9:
			showString += "October ";
			break;
		case 10:
			showString += "November ";
			break;
		case 11:
			showString += "December ";
			break;
	}

	//Date of next show
	showString += date.getDate();

	return showString;
}