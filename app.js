function initMap() {
  var locations = [
    {lat: 40.5543772, lng: -111.8983593},  //Karl Malone Toyota
    {lat: 40.543413, lng: -111.8965277}, //Volkswagen Southtowne
    {lat: 40.1423249, lng: -111.6484656}, //LHM Super Ford
    {lat: 40.3293784, lng: -111.7337983}, //Performance Ford
    {lat: 40.672421, lng: -111.8876254}, //LHM Dodge Jeep Chrysler Bountiful
    {lat: 40.6722237, lng: -111.8892444}, //Murdock Chevy Bountiful 
    {lat: 40.6731619, lng: -111.8891222}, //Murdock Hyundai of Murray
    {lat: 40.870601, lng: -111.8900219}, //Tim Dahle Infiniti
    {lat: 40.8969909, lng: -111.8932824}, //Tim Dahle Nissan
    {lat: 40.7396652, lng: -111.9067898}, //Tim Dahle Mazada
    {lat: 40.5494404, lng: -111.8974743}, //Murdock Hyundai of Lindon
    {lat: 40.6705572, lng: -111.8893578}, //Tim Dahle Ford
    {lat: 40.86481759999999, lng: -111.8970275}, //Tim Dahle Southtowne Nissan
    {lat: 40.2711111, lng: -111.7130556}, //Brent Brown Toyota
    {lat: 40.3456666, lng: -111.7258247}, //LHM Ford Provo
    {lat: 40.2593325, lng: -111.6670972}, //LHM Dodge Jeep Chrysler Provo
    {lat: 40.2594293, lng: -111.6650478}, //Dastrup Auto Inc
    {lat: 40.3494023, lng: -111.7273238}, //Low Book Sales of Lindon

  ]
  var labels = "ABCDEFGHIJKLMNOPQRSTUV"
  var map = new google.maps.Map(
    document.getElementById('map'), {
      center: { lat: 40.3365078, lng: -111.8290607 },
         zoom: 9
    });
    for (var i=0; i < locations.length; i++) {
      var markers = new google.maps.Marker({position: locations[i], label: labels[i % labels.length], map: map});
    }
 
    var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

};


