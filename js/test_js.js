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

// Music API
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const searchTermInput = document.getElementById('search-term');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const searchTerm = searchTermInput.value;
        searchBands(event);
    });

    function searchBands(event) {
        event.preventDefault();
        const searchQuery = document.querySelector('#search-query').value;
        const endpoint = `https://musicbrainz.org/ws/2/artist?query=${searchQuery}&limit=10`;

        fetch(endpoint, {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                const bands = data.artists;
                const bandList = document.createElement('ul');

                for (const band of bands) {
                    const bandLink = document.createElement('a');
                    bandLink.textContent = band.name;
                    bandLink.href = '#';
                    bandLink.setAttribute('data-id', band.id);
                    bandLink.addEventListener('click', showAlbums);
                    const bandListItem = document.createElement('li');
                    bandListItem.appendChild(bandLink);
                    bandList.appendChild(bandListItem);
                }

                const results = document.querySelector('#search-results');
                results.innerHTML = '';
                results.appendChild(bandList);
            })
            .catch(error => console.error(error));
    }

    function showAlbums(event) {
        const bandId = event.target.dataset.id;
        const endpoint = `https://musicbrainz.org/ws/2/release?artist=${bandId}&inc=artist-credits&limit=100`;

        fetch(endpoint, {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                const albums = data.releases;
                const albumList = document.createElement('ul');

                for (const album of albums) {
                    const albumLink = document.createElement('a');
                    albumLink.textContent = `${album.title} (${album.date})`;
                    albumLink.href = `https://musicbrainz.org/release/${album.id}`;
                    const albumListItem = document.createElement('li');
                    albumListItem.appendChild(albumLink);
                    albumList.appendChild(albumListItem);
                }

                const results = document.querySelector('#search-results');
                results.innerHTML = '';
                results.appendChild(albumList);
            })
            .catch(error => console.error(error));
    }

    const searchForm = document.querySelector('#search-form');
    searchForm.addEventListener('submit', searchBands);

});

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

// Alert
function myFunction() {
    alert("Hello, world!");
}

// Array functions
function sortArray() {
    const input = prompt('Enter a comma-separated list of numbers:');
    const sortedArray = parseArray(input); // Call the parseArray() function to sort the array
    alert(sortedArray);
}

function parseArray(input) {
    const arr = input.split(',').map(Number);
    arr.sort(function (a, b) { return a - b }); // Sort the array in ascending order
    return arr;
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