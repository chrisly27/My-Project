var express = require("express");
var cors = require("cors");
var bodyparser = require("body-parser");
var app = express();

app.use(cors());
app.use(bodyparser.urlencoded());

app.get("/", function(req, res)
{
	res.send("<h3>Let Smash this down now</h3>");
});


/* app.post("/test", function(req, res)
{
	console.log(req.body);
	
	//checking what the user submitted...
	if (req.body.favBrowser == "chrome")
	{
		res.send("Chrome!!!");
		if (req.body.favname == "crisly")
		{
			res.send("I am genius");
		}
		else
		{
			res.send("You are alien from Italy")
		}
	}
	else
	{
		res.send("Not Chrome");
	}
}); */

app.post("/test", function(req, res)
{
	console.log(req.body);
	if (req.body.favname == "crisly")
	{
		res.send("I am genius");
	}
	else
	{
		res.send("You are alien from Italy")
	}
});

app.listen(3000);