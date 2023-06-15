// have fun with coding this:)
movieKey = "7355d3ba";

var movieNameRef = $('movie-name');
var searchBTn = $('search-btn');
var result = $('result');




$(document).ready(function () {
    $(".sidenav").sidenav();

    $("#enter-home-btn").click(function () {
        $(".initial-container").addClass("display-none");
        $("#home").removeClass("display-none");
    });
});

// var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        $('body').innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    console.log(position)
    $('body').innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var weatherKey = "96515e32da8200e2651c60008ed403ea";
    var baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherKey}`;
    console.log("API URL:", baseURL);
    fetch(baseURL).then(function(response) {
        return response.json()
    }).then(function(res) {
        console.log(res)
    })
}
getLocation();


