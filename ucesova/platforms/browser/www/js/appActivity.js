// to track the user's location
		function trackLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.watchPosition(showPosition);
			} else {
				document.getElementById('showLocation').innerHTML = "Geolocation is not supported by this browser.";
			}
		}

		/* function showPosition(position) {
			document.getElementById('showLocation').innerHTML = "Latitude: " + position.coords.latitude +
		"<br>Longitude: " + position.coords.longitude;
		} */

		function showPosition(position) {
			L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap)
		}		
		
// load a map
		// var mymap = L.map('mapid').setView([51.505, -0.09], 13); 
		// poner que se centre en las coordenadas del usuario:
		var mymap = L.map('mapid').setView([51.505, -0.09], 13); 
		
		// load the tiles
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
		{
			maxZoom:18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'mapbox.streets'
		}).addTo(mymap);

		
		
		
		
		
			////change the map zoom so that all the data is shown
			//mymap.fitBounds(earthquakelayer.getBounds());
		
		
		