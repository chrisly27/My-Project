var express = require("express");
var cors = require("cors");



/* var sqlite3 = require(sqlite3).verbose();
var db = new sqlite3.Database("formDB"); */



var bodyparser = require("body-parser");
var app = express();

app.use(cors());
app.use(bodyparser.urlencoded());

/* db.serialise(function()
{
	db.run("CREATE TABLE IF NOT EXISTS form (favname TEXT)");
	
	db.run("INSERT INTO from (favname) VALUES (?)")
} */
app.get("/", function(req, res)
{
	res.send("<h3>New World begins here</h3>");
});


app.post("/form", function(req, res)
{
	console.log(req.body);
	if (req.body.latit == "")
	{
		res.send("I am genius");
	}
	else
	{
		res.send("You are: " + req.body.latit)
	}
});

app.listen(3000);