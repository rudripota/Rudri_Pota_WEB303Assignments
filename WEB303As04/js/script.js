/*
    Assignment #4
    Rudri Pota
    #0817379
    section 003, javascript 2
*/


$(function () {
    // your code here
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, fail);

        function success(pos) {
            var lat = pos.coords.latitude;
            var lon = pos.coords.longitude;

            $("#locationhere").html("<p style='color:blue'>Your Latitude right now is: "+ lat +"</p> <p style='color:blue'>Your Longitude right now is:"+ lon +"</p>");

            if(localStorage) {
                var storedLat = localStorage.getItem("Latitude");
                var storedLon = localStorage.getItem("Longitude");
                var distance;
                var distancemessage;

            if(storedLat && storedLon) {
                $("#content").append("<br><p style='color:yellow'>Your previous Latitude was: "+ storedLat +"</p> <p style='color:yellow'>Your previous Longitude was:"+ storedLon +"</p>");
                $("#content").append("<br><h1>Welcome back to the site...</h1>");

                    distance = calcDistanceBetweenPoints(lat, lon, storedLat, storedLon);
                    distancemessage = '<br> You have travelled <strong>'+ (distance/1000).toFixed(2)+' kilometers </strong> since you last visited this site.';

                    $("#content").append(distancemessage);
                }
                else{
                    $("#content").append("<br><h1>Welcome to this page for the very first time!</h1>");
                }
            }

            localStorage.setItem("Longitude", lon);
            localStorage.setItem("Latitude" , lat);
            
        }

        function fail() {
            $("#locationhere").html("<h1>We can not get your location</h1>");
        }
    }
    else{
        $("#locationhere").html("<h1>Please allow location services to continue.</h1>"); 
    }

    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});