function buildNavBar() {
	var htmlString = "<nav class='navbar navbar-inverse navbar-fixed-top'><div class='navbar-header'>" +
				 "<button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>" +
				 "<span class='sr-only'>Toggle navigation</span><span class='icon-bar'></span><span class='icon-bar'></span><span class='icon-bar'></span></button>" +
				 "<a class='navbar-brand' style='text-align:center' href='index.html'><img id='navbar-logo' src='img/logo-transparent.png'/></a></div>" +
				 "<div id='navbar' class='navbar-collapse collapse'><ul class='nav navbar-nav navbar-right' style='margin-top:12px;text-align:right'>";

	for(var i = 0; i < data.navLinks.length; ++i) {
		htmlString += "<li><a href='" + data.navLinks[i].url + "'>" + data.navLinks[i].text + "</a></li>";
	}

	htmlString += "</ul></div></nav>";

	$('.navbar-wrapper').html(htmlString);
}

function buildSocialMedia() {
	var htmlString = "<div class='row' style='padding-top:30px'><div class='col-xs-2'></div>";
	for(var i = 0; i < data.socialMedia.length; ++i) {
		htmlString += "<div class='col-xs-2 col-md-1'><a href='" + data.socialMedia[i].link + "'><img src='img/Social Media/" + data.socialMedia[i].image + "' style='width:50%'/></a></div>"
	}

	htmlString += "</div>";

	$('.social-media').html(htmlString);
}