/* //lets register template7 helper so we can pass json string in links
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

  var myApp = new Framework7();
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
});  */ 



//variable that gets the current location
//using lantitude and longitude
var x = document.getElementById("demo");
var lt;
var lg;


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

//function that uses the lantitude and longitude
//to display the current location into a map
//and displays it on the app
function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    latlon = new google.maps.LatLng(lat, lon)
    mapholder = document.getElementById('mapholder')
    mapholder.style.height = '250px';
    mapholder.style.width = '500px';

    var myOptions = {
    center:latlon,zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    }
    
    var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
	
		
	lt = document.getElementById("la").value = innerHTML = position.coords.latitude;
	lg = document.getElementById("lo").value = innerHTML = position.coords.longitude;
}
//funtion that identifies any error with the map
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


function saveMECrisly()
{
	$.ajax(
	{
		type: 'POST',
		url: 'http://localhost:8080/form',
		data:
	{
		name: $("#name").val(),
		email: $("#email").val(),
		phone: $("#phone").val(),
		desc: $("#desc").val(),
		road: $("#road").val(),
		date: $("#date").val(),
		latit: $("#la").val(),
		longi: $("#lo").val()
	},
    success: function(cb)
	{
		console.log('sent data to server');
		alert(cb);
    },
    error: function()
	{
		alert('error');
    }
	});
}


$('#submit').on('click', function()
{
	$.ajax(
	{
		type: 'POST',
		url: 'http://localhost:8080/form',
		data:
	{
		name: $("#name").val(),
		email: $("#email").val(),
		phone: $("#phone").val(),
		desc: $("#desc").val(),
		road: $("#road").val(),
		date: $("#date").val(),
		latit: $("#la").val(),
		longi: $("#lo").val()
	},
    success: function(cb)
	{
		console.log('sent data to server');
		alert(cb);
    },
    error: function()
	{
		alert('error');
    }
	});
});







  
  

/* var fileInput = document.getElementById('file');
fileInput.addEventListener('change', function(e)
{
	//create a file reader
	var reader = new FileReader();
	reader.onload = function()
	{
		//save image to local storage (img)
		localStorage.img = reader.result;
	};
	var file = e.target.files[0];
	reader.readAsDataURL(file);
});

function createImg(dataUri)
{
	var img = document.createElement('img');
	img.src = dataUri;
	img.className = "imgPreview";
	document.body.appendChild(img);
}

var showbutton = document.getElementById('showimage');
showbutton.addEventListener('click', function(e)
{
	showPhoto();
});

function showPhoto()
{
	for ( var i = 0; i < localStorage.length; ++i ) {
	if ( localStorage.key(i) == 'img')
	{
		createImg(localStorage.getItem(localStorage.key(i)));
	}
}
}
 */





/* 
//function storing data into localstorage
function save()
{
	var LongLant = latlon;
	/* var latit = coords.latitude;
	var longi = coords.longitude; 
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var desc = document.getElementById("desc").value;
	
	var road = document.getElementById("road").value;
	var date = document.getElementById("date").value;
	
	myApp.alert("Successfull");
	
	console.log("Position: " + LongLant
				+ "\nname: " + name
				+ "\nemail: " + email
				+ "\nphone: " + phone
				+ "\ndesc: " + desc
				+ "\nroad: " + road
				+ "\ndate: " + date);
}
	
	
	
	
	
	
	
	

function test()
{
	console.log("test successfully passed");
} */