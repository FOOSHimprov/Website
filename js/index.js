'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

function initializePage() {
	//Dispaly nav
	buildNavBar();

	//Display date of next upcoming show
	var today = new Date();
	var nextShow = null;
	var nextShowIndex = -1;
	var tempDate;
	for(var i = 0; i < data.fallShows.length; ++i) {
		tempDate = new Date(data.fallShows[i].day + " 20:00:00");
		if(today <= tempDate) {
			nextShow = tempDate;
			nextShowIndex = i;
			break;
		}
	}
	if(nextShow == null) {
		for(var i = 0; i < data.winterShows.length; ++i) {
			tempDate = new Date(data.winterShows[i].day + " 20:00:00");
			if(today <= tempDate) {
				nextShow = tempDate;
				nextShowIndex = i + 5;
				break;
			}
		}
	}
	if(nextShow == null) {
		for(var i = 0; i < data.springShows.length; ++i) {
			tempDate = new Date(data.springShows[i].day + " 20:00:00");
			if(today <= tempDate) {
				nextShow = tempDate;
				nextShowIndex = i + 10;
				break;
			}
		}
	}

	if(nextShow != null) {
		//Weekday of next show
		var showString = getDateString(nextShow);

		//Time and location of next show
		if(nextShowIndex >= 0 && nextShowIndex < 5) {
			showString += " at " + data.fallShows[nextShowIndex].time + " in " + data.fallShows[nextShowIndex].location;
		}
		else if(nextShowIndex < 10) {
			showString += " at " + data.winterShows[nextShowIndex-5].time + " in " + data.winterShows[nextShowIndex-5].location;
		}
		else {
			showString += " at " + data.springShows[nextShowIndex-10].time + " in " + data.springShows[nextShowIndex-10].location;
		}

		$('#next-show').text(showString);
	}
	else {
		$('#next-show').text("We don't have any shows coming up right now! Have a great summer!");
	}

	//Display upcoming workshop information
	if(data.workshops[0].day == "") {
		$('#next-workshop').text("There are no workshops coming up.");
	}
	else {
		var workshopString = getDateString(new Date(data.workshops[0].day));
		workshopString += " at " + data.workshops[0].time + " in " + data.workshops[0].location;
		$('#next-workshop').text(workshopString);
	}

	//Display social media
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