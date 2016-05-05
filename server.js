//declaring variables that i will use to run the app
var multer = require("multer");
var express = require("express"); //api
var cors = require("cors");
var bodyparser = require("body-parser"); //getting each element of the body
var sqlite3 = require ("sqlite3").verbose(); //database
var db = new sqlite3.Database("potholebd"); //table name in database
var app = express(); //declaring the express
app.use(cors());
app.use(bodyparser.urlencoded());


//function to make sure that the 3000 port is working
app.get("/", function(req, res)
{
	res.send("<h3>The Server is up and running. Thank you!!!</h3>");
});


//function to run the form
//posting the data of the form inside of this form
app.post("/form", function(req, res)
{
	if(req.body.latit == "")//checking the latitude is cheched
	{
		res.send("Please, can you check the form. You must fill all the fields. Thanks");
	}
	else if (req.body.longi == "")//checking the longitude is cheched
	{
		res.send("Please, can you check the form. You must fill all the fields. Thanks");
	}
	else //if the latitude and longitude is filled then put data into database table
	{
		db.serialize(function()
		{
			db.run("CREATE TABLE IF NOT EXISTS pothole (lat INTEGER, lon INTEGER, name TEXT, email TEXT, phone INTEGER, descrip TEXT, road TEXT, date INTEGER) ");
			//create a new row inside the table
			db.run("INSERT INTO pothole (lat, lon, name, email, phone, descrip, road, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", req.body.latit, req.body.longi, req.body.name, req.body.email, req.body.phone, req.body.desc, req.body.road, req.body.date);
		});
		
		//send a messagem to the user that the form is submited...
		res.send("Your report was successfully sent to your team.\n\nSomeone will contact you soon for update on your report\n\n\nThank you very much!");
	}
});

app.get("/3000")
app.get("/receiver", function(req, res)
{
	db.all("SELECT * FROM pothole", function(err, rows)
	{
		res.jsonp(rows);
	})
});

app.listen(3000);


















