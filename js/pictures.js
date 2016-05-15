'use strict'

$(document).ready(function() {
	initializePage();
});

function initializePage() {
	console.log("In about.js");
	//Build nav bar
	buildNavBar();

	//Build photo grid
	var htmlString = "<div class='row'>";
	for(var i = 0; i < data.photoAlbums.length; ++i) {
		htmlString += "<div class='col-xs-12 col-sm-6 col-md-4 portfolio-item' align='center'>" +
					  "<a href='" + data.photoAlbums[i].link + "'>" +
					  "<img class='img-responsive album-photo' src='img/Album Covers/" + data.photoAlbums[i].image + "' alt='' align='center'></a>" +
					  "<div class='album-info'><h3><a href='" + data.photoAlbums[i].link + "'>" + data.photoAlbums[i].title + "</a></h3>" +
					  "<p class='gallery-caption'>" + data.photoAlbums[i].date + "</p></div></div>";
	}

	htmlString += "</div>";

	$('.photo-albums').html(htmlString);

	//Build social media
	buildSocialMedia();
}

/*<div class="photo-albums">
            <div class="row">
                {{#each photo-album}}
                    <div class="col-xs-6 portfolio-item">
                        <a href="{{link}}">
                            <img class="img-responsive album-photo" src="img/Album Covers/{{image}}" alt="" align="center">
                        </a>
                        <div class="album-info">
                            <h3>
                                <a href="{{link}}">{{title}}</a>
                            </h3>
                            <p class="gallery-caption">{{date}}</p>
                        </div>
                    </div>
                {{/each}}
            </div>
        </div>*/