// have fun with coding this:)
movieKey = "7355d3ba";

$(document).ready(function () {
  $(".sidenav").sidenav();

  $("#enter-home-btn").click(function () {
    $(".initial-container").addClass("display-none");
    $("#home").removeClass("display-none");
  });
});





var baseURL =
  "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={weatherKey}";
var weatherKey = "96515e32da8200e2651c60008ed403ea";
var url = baseURL.replace("{weatherKey}", weatherKey);
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;
console.log(url);

function getCurrentPosition() {
  return new Promise(function (resolve, reject) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
}

getCurrentPosition()
  .then(function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var weatherKey = "96515e32da8200e2651c60008ed403ea";
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherKey}`;

    console.log("API URL:", url);

    // Perform further actions with the URL, such as making an API request
    $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      success: function (data) {
        console.log("Weather data:", data);

        // Extract the relevant weather information from the data
        var weatherDescription = data.weather[0].description;
        var temperature = data.main.temp;
        var humidity = data.main.humidity;

        // Display the weather information in the browser
        $("#weather-description").text("Description: " + weatherDescription);
        $("#temperature").text("Temperature: " + temperature + " K");
        $("#humidity").text("Humidity: " + humidity + "%");

        // This is what the logic will look like to display weather icons based on weather
        if (weatherDescription.includes("cloudy")) {
          var imageURL = './assets/cloudy-icon.png';
          $("#myImage").attr("src", imageURL);
        } if (weatherDescription.includes("raining")) {
          var imageURL = './assets/rain-icon.png';
          $("#myImage").attr("src", imageURL);
        } if(weatherDescription.includes("lightning")) {
          var imageURL = './assets/lightning-icon.png';
          $("#myImage").attr("src", imageURL);
        } if(weatherDescription.includes("snow")) {
          var imageURL = './assets/snowing-icon.png';
          $("#myImage").attr("src", imageURL);
        } if(weatherDescription.includes("sun")) {
          var imageURL = './assets/sunny-icon.png';
          $("#myImage").attr("src", imageURL);
        }; 

      },
      error: function (error) {
        console.log("Error:", error);
      },
    });
  })
  .catch(function (error) {
    console.log("Error:", error);
  });
