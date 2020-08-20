function initMap() {
  var locations = [
    {lat: 40.5431388, lng: -111.8992322},
    {lat: 40.5539592, lng: -111.9002981},
    {lat: 40.7402955, lng: -111.9087438},
    {lat: 40.8652313, lng: -111.8961617},
    {lat: 40.865295,  lng: -111.9289926},
    {lat: 40.8970171, lng: -111.8953847},
    {lat: 40.8648216, lng: -111.8992162}
  ]
  var labels = "ABCDEFG"
  var map = new google.maps.Map(
      document.getElementById('map'), {
        center: { lat: 40.3365078, lng: -111.8290607 },
           zoom: 9
      });
      for (var i=0; i < locations.length; i++) {
        var marker = new google.maps.Marker({position: locations[i], label: labels[i % labels.length], map: map});
      }
  
}





