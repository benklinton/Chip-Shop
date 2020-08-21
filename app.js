require("dotenv").config();
function initMap() {
  var address = [
    "11453+Lone+Peak+Pkwy,+Draper,+UT+84020",  //Karl Malone Toyota
    "11000+Frontage+Rd,+South+Jordan,+UT+84095", //Volkswagen Southtowne
    "1340+500+W,+Salt+Lake+City,+UT+84115", //LHM Super Ford
    "1800+S+Main+St,+Bountiful,+UT+84010", //Performance Ford
    "755+N+500+W,+West+Bountiful,+UT+84010", //LHM Dodge Jeep Chrysler Bountiful
    "2375+S+625+W,+Woods+Cross,+UT+84010", //Murdock Chevy Bountiful 
    "4646+S+State+St,+Murray,+UT+84107", //Murdock Hyundai of Murray
    "4594+S+State+St,+Murray,+UT+84107", //Tim Dahle Infiniti
    "4528+S+State+St,+Murray,+UT+84107", //Tim Dahle Nissan
    "4595+S+State+St,+Murray,+UT+84107", //Tim Dahle Mazada
    "452+S,+Lindon+Park+Dr,+Lindon,+UT+84042", //Murdock Hyundai of Lindon
    "2534+N+200+E,+Spanish+Fork,+UT+84660", //Tim Dahle Ford
    "11155+Jordan+Gateway,+South+Jordan,+UT+84095", //Tim Dahle Southtowne Nissan
    "1400+S+Sandhill+Rd,+Orem,+UT+84058", //Brent Brown Toyota
    "1995+N+University+Pkwy,+Provo,+UT+84604", //LHM Ford Provo
    "1825+N+University+Pkwy,+Provo,+UT+84604", //LHM Dodge Jeep Chrysler Provo
    "475+N+State+St,+Lindon,+UT+84042", //Dastrup Auto Inc
    "590+N+State+St,+Lindon,+UT+84042", //Low Book Sales of Lindon

  ]
  var key = process.env.KEY
  var labels = "ABCDEFGHIJKLOMOPQRSTUVWXYZ"
  for (var i = 0; i < address.length; i++) {
    var geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address[i] + "&key=" + key;

    $.ajax({
      url: geocodeURL,
      method: "GET"
    }).then(function (response) {
      var location = response.results[0].geometry.location
    
      var map = new google.maps.Map(
        document.getElementById('map'), {
        center: { lat: 40.3365078, lng: -111.8290607 },
        zoom: 9
      });
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
        console.log(marker)
    });

  }

}
initMap();





