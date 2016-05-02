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

function test()
{
	console.log("test successfully passed");
}