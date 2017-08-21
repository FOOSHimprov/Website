// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict
    $(document).ready(function() {
        $('.navbar').hide();
        loadData();

        // fade in .navbar
        $(function () {
            $(window).scroll(function () {
                // set distance user needs to scroll before we start fadeIn
                if ($(this).scrollTop() > 400) {
                    $('.navbar').fadeIn();
                } else {
                    $('.navbar').fadeOut();
                }
            });
        });

        $(".planet-section").mouseover(function(e) {
            $(e.delegateTarget.children[1].firstChild).css('font-size', '22px');
        });
        $(".planet-section").mouseout(function(e) {
            $(e.delegateTarget.children[1].firstChild).css('font-size', '20px');
        })
    });

    var $form = $('form');
    
    $form.submit(function(e){
        e.preventDefault();
        $.post($(this).attr('action'), $(this).serialize(), function(response){
            // do something here on success
        },'json');
        // Success message
        $('#success').html("<div class='alert alert-success'>");
        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
        $('#success > .alert-success').append("<strong>Thanks for contacting us! Your message has been sent.</strong>");
        $('#success > .alert-success').append('</div>');
        //Clear out fields
        $('#name').val('');
        $('#email').val('');
        $('#interest').val('Select your interest in FOOSH');
        $('#message').val('');
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });
})(jQuery); // End of use strict

function loadData() {
    loadAbout();
    loadShows();
    loadMembers();
    loadPhotos();
    loadContact();
}

function loadAbout() {
    //Display About section
    $('#about .section-heading').text(data.aboutSection[0].title);
    $('#about-text-title').text(data.aboutSection[0].subtitle);
    $('#about-text').html(data.aboutSection[0].text);
    $('#show-date-label').text(data.aboutSection[0].showLabel);
    $('#workshop-date-label').text(data.aboutSection[0].workshopLabel);
    $('#about-group-photo').html("<img align='middle' src='img/" + data.aboutSection[0].image + "'/>");
    showAndWorkshopDates();
}

function loadShows() {
    $('#shows .section-heading').text(data.showsSection[0].title);
    $('#shows .section-subheading').text(data.showsSection[0].schoolYear);
    showSchedule();
}

function loadMembers() {
    $('#members .section-heading').text(data.membersSection[0].title);
    //Create row system for dispalying in grid
    var htmlString = "";

    for(var i = 0; i < data.allMembers.length; ++i) {
        //Build foundation for figure
        htmlString += "<div class='col-lg-3 col-md-3 col-sm-4 col-xs-6'>";
        htmlString += "<img class='img-responsive img-circle member-photo' src='img/Members/" + data.allMembers[i].image + "'/>";
        htmlString += "<p class='text-center'>" + data.allMembers[i].name + "<br>" + data.allMembers[i].year + " Year<br>(" + data.allMembers[i].fooshYear + " Year FOOSH)<br>" + data.allMembers[i].college + "</p>";
        htmlString += "</div>";
    }

    //Finish html code for grid
    $('#members-grid').html(htmlString);
}

function loadPhotos() {
    $('#photos .section-heading').text(data.photoSection[0].title);

    var htmlString = "";
    for(var i = 0; i < data.photoAlbums.length; ++i) {
        htmlString += "<div class='col-md-4 col-sm-6 col-xs-12 album-item'>";
        htmlString += "<a href='" + data.photoAlbums[i].link + "'>";
        htmlString += "<img src='img/Album Covers/" + data.photoAlbums[i].image + "' class='img-responsive album-cover' alt=''></a>";
        htmlString += "<div class='album-caption'><a href='" + data.photoAlbums[i].link + "'><h4 class='album-title'>" + data.photoAlbums[i].title + "</h4></a>";
        htmlString += "<a href='" + data.photoAlbums[i].link + "'><p class='text-muted album-subtitle'>" + data.photoAlbums[i].date + "</p></a></div></div>";
    }

    $('#photo-albums').html(htmlString);
}

function loadContact() {
    $('#contact .section-heading').text(data.contactSection[0].title);

    //Load board member images
    var htmlString = "";

    for(var i = 0; i < data.boardMembers.length; ++i) {
        if(i === 0)
            htmlString += "<div class='col-sm-2 col-sm-offset-1 col-xs-6'>";
        else
            htmlString += "<div class='col-sm-2 col-xs-6'>";
        htmlString += "<img class='img-circle img-responsive board-member' src='img/Board Members/" + data.boardMembers[i].image + "'/>";
        htmlString += "<p class='text-center'>" + data.boardMembers[i].name + "<br>" + data.boardMembers[i].position + "</p></div>";
    }

    $('#board-members').html(htmlString);

    //Load options in contact drop-down
    var optionString = "<option value='Select your interest in FOOSH' class=''>SELECT YOUR INTEREST IN FOOSH</option>";;
    for(var i = 0; i < data.contactSection[1].options.length; ++i) {
        optionString += "<option value='" + data.contactSection[1].options[i].text + "'>" + data.contactSection[1].options[i].text + "</option>"
    }

    $('#interest').html(optionString);
}

function showAndWorkshopDates() {
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
        $('#next-show').text("Sorry, we don't have any shows scheduled right now!");
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

function showSchedule() {
    //Schedule Quarter Variables
    var fallString = "";
    var winterString = "";
    var springString = "";

    //Create show calendar for Fall Quarter
    for(var i = 0; i < data.fallShows.length; ++i) {
        if(i === 0) {
            fallString += "<div class='row'><div class='col-xs-3'><h5>Week</h5></div>";
            fallString += "<div class='col-xs-3'><h5>Date</h5></div>";
            fallString += "<div class='col-xs-3'><h5>Location</h5></div>";
            fallString += "<div class='col-xs-3'><h5>Theme</h5></div></div>";
        }
        if(data.fallShows[i].week === "")
            fallString += "<div class='row'><div class='col-xs-3'><p>Week TBA</p></div>";    
        else
            fallString += "<div class='row'><div class='col-xs-3'><p>Week " + data.fallShows[i].week + "</p></div>";
        if(data.fallShows[i].day === "" || data.fallShows[i].day === "TBA")
            fallString += "<div class='col-xs-3'><p>TBA</p></div>";
        else
            fallString += "<div class='col-xs-3'><p>" + getDateString(new Date(data.fallShows[i].day)) + " at " + data.fallShows[i].time + "</p></div>";
        if(data.fallShows[i].location === "")
            fallString += "<div class='col-xs-3'><p>TBA</p></div>";
        else
            fallString += "<div class='col-xs-3'><p>" + data.fallShows[i].location + "</p></div>";
        if(data.fallShows[i].theme === "" && (data.fallShows[i].day === "" || data.fallShows[i].day === "TBA"))
            fallString += "<div class='col-xs-3'><p>TBA</p></div></div>";
        else if (data.fallShows[i].theme === "")
            fallString += "<div class='col-xs-3'><p>No theme</p></div></div>";
        else
            fallString += "<div class='col-xs-3'><p>" + data.fallShows[i].theme + "</p></div></div>";
    }

    //Create show calendar for Winter Quarter
    for(var i = 0; i < data.fallShows.length; ++i) {
        if(i === 0) {
            winterString += "<div class='row'><div class='col-xs-3'><h5>Week</h5></div>";
            winterString += "<div class='col-xs-3'><h5>Date</h5></div>";
            winterString += "<div class='col-xs-3'><h5>Location</h5></div>";
            winterString += "<div class='col-xs-3'><h5>Theme</h5></div></div>";
        }
        if(data.winterShows[i].week === "")
            winterString += "<div class='row'><div class='col-xs-3'><p>Week TBA</p></div>";    
        else
            winterString += "<div class='row'><div class='col-xs-3'><p>Week " + data.winterShows[i].week + "</p></div>";
        if(data.winterShows[i].day === "" || data.winterShows[i].day === "TBA")
            winterString += "<div class='col-xs-3'><p>TBA</p></div>";
        else
            winterString += "<div class='col-xs-3'><p>" + getDateString(new Date(data.winterShows[i].day)) + " at " + data.winterShows[i].time + "</p></div>";
        if(data.winterShows[i].location === "")
            winterString += "<div class='col-xs-3'><p>TBA</p></div>";
        else
            winterString += "<div class='col-xs-3'><p>" + data.winterShows[i].location + "</p></div>";
        if(data.winterShows[i].theme === "" && (data.winterShows[i].day === "" || data.winterShows[i].day === "TBA"))
            winterString += "<div class='col-xs-3'><p>TBA</p></div></div>";
        else if (data.winterShows[i].theme === "")
            winterString += "<div class='col-xs-3'><p>No theme</p></div></div>";
        else
            winterString += "<div class='col-xs-3'><p>" + data.winterShows[i].theme + "</p></div></div>";
    }

    //Create show calendar for Spring Quarter
    for(var i = 0; i < data.fallShows.length; ++i) {
        if(i === 0) {
            springString += "<div class='row'><div class='col-xs-3'><h5>Week</h5></div>";
            springString += "<div class='col-xs-3'><h5>Date</h5></div>";
            springString += "<div class='col-xs-3'><h5>Location</h5></div>";
            springString += "<div class='col-xs-3'><h5>Theme</h5></div></div>";
        }
        if(data.springShows[i].week === "")
            springString += "<div class='row'><div class='col-xs-3'><p>Week TBA</p></div>";    
        else
            springString += "<div class='row'><div class='col-xs-3'><p>Week " + data.springShows[i].week + "</p></div>";
        if(data.springShows[i].day === "" || data.springShows[i].day === "TBA")
            springString += "<div class='col-xs-3'><p>TBA</p></div>";
        else
            springString += "<div class='col-xs-3'><p>" + getDateString(new Date(data.springShows[i].day)) + " at " + data.springShows[i].time + "</p></div>";
        if(data.springShows[i].location === "")
            springString += "<div class='col-xs-3'><p>TBA</p></div>";
        else
            springString += "<div class='col-xs-3'><p>" + data.springShows[i].location + "</p></div>";
        if(data.springShows[i].theme === "" && (data.springShows[i].day === "" || data.springShows[i].day === "TBA"))
            springString += "<div class='col-xs-3'><p>TBA</p></div></div>";
        else if (data.springShows[i].theme === "")
            springString += "<div class='col-xs-3'><p>No theme</p></div></div>";
        else
            springString += "<div class='col-xs-3'><p>" + data.springShows[i].theme + "</p></div></div>";
    }

    //Add Details to Calendar
    $("#fall-shows").html(fallString);
    $("#winter-shows").html(winterString);
    $("#spring-shows").html(springString);
}