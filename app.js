$(document).ready(function() {

if (navigator.geolocation.getCurrentPosition) {
    
navigator.geolocation.getCurrentPosition(function(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude; 
    
  $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude, function(responseText,statusText, xhr) { 
                
  if (statusText == "success") {
    var weatherBackground = responseText.weather[0].main.toLowerCase();
    var city = responseText.name;
    var weather = responseText.main.temp;
    var fahrenheit = Math.round(weather * 9/5 + 32);
    var changeTemperature = false;

    $("#location").html(city);
    $("#weather").html(weather + " °C");
    $("body").addClass(weatherBackground);

    $("#tempToggle").click(function() {
      if(!changeTemperature) {
        $("#weather").html(fahrenheit + " °F");
        changeTemperature = true;
      } else {
        $("#weather").html(weather + " °C");
        changeTemperature = false;
        }
      }); 
               
      } else {
          $("#errorMessage").html("I can't see your location!");
        }     
                
      });
    }); 
  } 
});
   