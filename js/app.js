var x = document.getElementById("show_cords");
var show = document.getElementById("show_res");
var lat = "";
var long = "";
const apikey = "e6f24338b0994586b33d707fa681008b";

// GETTING BROWSER GPS LOCATION
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;

  //showing data to input field
  x.value = lat + "," + long;
  getCity(lat, long, apikey);
}

window.onload = function () {
  getLocation();
};



function getCity(lat, long, apikey) {
  // debug 
  console.log("Lat: " + lat + " Long: " + long + " Api: " + apikey);

  // Api methods starts
  var requestOptions = {
    method: "GET",
  };
  fetch("https://api.geoapify.com/v1/geocode/reverse?lat="+lat+"&lon="+long +"&format=json&type=city&apiKey="+apikey, requestOptions)
    .then((response) => response.json())
    .then((result) => assign(result))
    .catch((error) => console.log("error", error));
}

function assign(data) {
  gps = data.results[0];
  placename = gps.name;
  city = gps.city;
  district = gps.county;
  country = gps.country;
  division = gps.state;
  postcode = gps.postcode;

// --html -- 
document.getElementById("placename").innerHTML=placename;
document.getElementById("city").innerHTML=city;
document.getElementById("district").innerHTML=district;
document.getElementById("country").innerHTML=country;
document.getElementById("division").innerHTML=division;
document.getElementById("postcode").innerHTML=postcode;
  // console.log(gpsCity);
  console.log(gps);
}