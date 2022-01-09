var x = document.getElementById("show_cords"); 
var show = document.getElementById("show_res"); 
var lat = "";
var long = "";
const apikey = "e6f24338b0994586b33d707fa681008b";

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
  //   x.value = position.coords.latitude+","+position.coords.longitude;

  x.value = lat + "," + long;

  var requestOptions = {
    method: "GET",
  };
  var responseArray=0;
  fetch("https://api.geoapify.com/v1/geocode/reverse?lat="+lat+"&lon="+long+"&format=json&type=city&apiKey="+apikey+"",requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    // .then((result) => responseArray)
    // .then((result) =>   show.innerHTML(result))
    .catch((error) => console.log("error", error));


    // console.log(results.city);
}


