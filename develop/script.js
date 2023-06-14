// have fun with coding this:)
movieKey = '7355d3ba';












var baseURL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={weatherKey}';
var weatherKey = '96515e32da8200e2651c60008ed403ea';
var url = baseURL.replace('{weatherKey}', weatherKey);
console.log(url);


navigator.geolocation.getCurrentPosition(showPosition)