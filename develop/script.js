// have fun with coding this:)
movieKey = "7355d3ba";

var movieNameRef =  $('movie-name');
var searchBTn = $('search-btn');
var result = $('result');




$(document).ready(function () {
  $(".sidenav").sidenav();

  $("#enter-home-btn").click(function () {
    $(".initial-container").addClass("display-none");
    $("#home").removeClass("display-none");
  });
});





var baseURL = "https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={lon}&appid={weatherKey}";
var weatherKey = "96515e32da8200e2651c60008ed403ea";
var url = baseURL;
baseURL.replace('{weatherKey}', weatherKey);
baseURL.replace('{latitude}', latitude);
baseURL.replace('{longitude}', longitude);



getCurrentPosition()
  .then(function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var weatherKey = "96515e32da8200e2651c60008ed403ea";
    var baseURL = "https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={weatherKey}";
    var url = baseURL
      .replace("{latitude}", latitude)
      .replace("{longitude}", longitude)
      .replace("{weatherKey}", weatherKey);

    console.log("API URL:", url);

    // Perform further actions with the URL, such as making an API request
  })
  .catch(function (error) {
    console.log("Error:", error);
  });