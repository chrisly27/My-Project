var express = require("express");
var cors = require("cors");



var bodyparser = require("body-parser");
var app = express();

app.use(cors());
app.use(bodyparser.urlencoded());


app.get("/", function(req, res)
{
	res.send("<h3>New World begins here</h3>");
});


app.post("/form", function(req, res)
{
	console.log(req.body);
	if (req.body.latit != "" || req.body.loni != "")
	{
		res.send("Latitude: " + req.body.latit + "\nLongitude: " + req.body.longi);
	}
	else
	{
		res.send("Time to run for your life now");
	}
});

app.listen(3000);