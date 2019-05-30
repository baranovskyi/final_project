var map;
      function initMap() {
          var center = {lat: 49.227245, lng: 28.408446};
        map = new google.maps.Map(document.getElementById('map'), {
          center: center,
          zoom: 16
        });
        var marker = new google.maps.Marker({position: center, map: map})
      }


