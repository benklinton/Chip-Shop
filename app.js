function initMap() {
  var locations = [{lat: 40.2592961, lng: -111.6692337}, {lat:40.2711152, lng:-111.7152443}]
  var labels = "AB"
  var map = new google.maps.Map(
      document.getElementById('map'), {
        center: { lat: 40.3365078, lng: -111.8290607 },
           zoom: 9
      });
      for (var i=0; i < locations.length; i++) {
        var marker = new google.maps.Marker({position: locations[i], label: labels[i % labels.length], map: map});
      }
  
}





