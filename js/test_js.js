// conditional
function conditional() {
    alert("Use Inspect to see the console and inspect the code.");
    var currentHour = new Date().getHours();
    if (currentHour < 10) {
        alert("Good morning!");
    } else if (currentHour < 18) {
        alert("Good day!");
    } else {
        alert("Good evening!");
    }
}

// for loop
for (i = 0; i < 5; i++) {
    console.log("The number is " + i);
}

// evalNumber() example
function evalNumber(parameters) {
    var inputValue = prompt("Enter any five-digit number without commas")
    if (isNaN(inputValue) || inputValue.length !== 5 || !Number.isInteger(+inputValue)) {
        alert(inputValue + " is not a whole five-digit number.");
    } else if (inputValue % 2 == 0) {
        alert(inputValue + " is an even number.");
    } else {
        alert(inputValue + " is an odd number.");
    }
}

// change title
function changeTitle() {
    let selectedElement = document.getElementById("hello");
    console.log(selectedElement);
    selectedElement.innerText = "Hello again!";
}

// disappear item
function disappearItem() {
    const image = document.getElementById('hello');
    image.style.display = 'none'
}

// current minute
function displayMinute() {
    const minuteDiv = document.getElementById('minute');
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const totalMinutes = hours * 60 + minutes;
    minuteDiv.innerText = `The total number of minutes since midnight is ${totalMinutes}.`;
}

// map API
function mapLoad() {
    // Define the coordinate
    var latLng = [41.789649, -89.599702];

    // Set attribution and access key URL
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibnlpcHVjaGljYWdvIiwiYSI6ImNsZzl3eXh4YTA0eWIzaW83N2F5aG5tYzMifQ.uF5zX14s-VJNvqmppH9NeA';

    // Define two tile layer attributes
    var streets = L.tileLayer(mbUrl, {
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        attribution: mbAttr
    }
    );

    // Define map object
    var map = L.map('map', {
        center: latLng,
        zoom: 16,
        layers: [streets]
    });

    // Add tile layers to base layer object
    // Add to the map
    // Add a marker with pop up
    var grayscale = L.tileLayer(mbUrl, { id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr });
    var streets = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr });
    var baseLayers = {
        "Grayscale": grayscale,
        "Streets": streets
    };

    L.control.layers(baseLayers).addTo(map);
    L.marker(latLng).addTo(map)
        .bindPopup("<b>UChicago<br>Campus</b>").openPopup();

    // Add nifty event
    var popup = L.popup();
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    map.on('click', onMapClick)

}