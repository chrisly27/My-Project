//lets register template7 helper so we can pass json string in links
Template7.registerHelper('json_stringify', function(context){
	return JSON.stringify(context);
});

// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
    template7Pages: true,
    // Specify Template7 data for pages

  });

// Export selectors engine
var $$ = Dom7;

var mainView = myApp.addView('.view-main',{
	//enable dynamic Navbar
	dynamicNavbar: true,
});

/*  var myApp = new Framework7();
myApp.onPageInit('login-screen', function (page) {
  var pageContainer = $$(page.container);
  pageContainer.find('.list-button').on('click', function () {
    var username = pageContainer.find('input[name="username"]').val();
    var password = pageContainer.find('input[name="password"]').val();
    // Handle username and password
    myApp.confirm('Username: ' + username + ', Password: ' + password, function () {
      // mainView.goBack();
    });
  });
}); */   






var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&sensor=false";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
	console.log("Latitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude);
	console.log("showError");
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}











   

function test()
{
	console.log("test successfully passed");
}