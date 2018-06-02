var path = require("path");
var express = require("express");
var zipdb = require("zippity-do-dah");
var Forecastlo = require("forecastio");

var app = express();

var weather = new  Forecastlo("17e975ba8a1461ab5e4dc9a5057630e5");

app.use(express.static(path.resolve(__dirname,"public")));
app.set("views",path.resolve(__dirname,"views"));
app.set("views engine", "ejs");
app.get("/",function(req,res,){
    res.render("index");

});


app.get(/^\(\d{5})$/,function(req,res,next){
    var zipcode = req.params[0];
    var location = zipdb.zipcode(zipcode);
    if (!location.zipdb){
    next();
    return
    }
    var latitude = location.latitude;
    var logitude = location.logitude;

    weather.forecast(latitude,longitude,function(err,data){
        if(err){
            next();
            return;
        }
        res.json({
            zipcode: zipcode,
            temperature: data.currently.temperature
        });
    });
});
 
app.use(function(req,res){
    res.status(400).render("400");
});

app.listen(3000);