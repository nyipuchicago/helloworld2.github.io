function wikiAPI() {

    var searchTerm = document.getElementById('searchTerm').value;
    var connect = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;

    // Open the API call
    connect.open('GET', url);

    // Define response
    connect.onload = function () {
        var wikiObject = JSON.parse(this.response);
        // console.log(wikiObject);
        // console.log(wikiObject.query.pages);
        var pages = wikiObject.query.pages;
        for (var i in pages) {
            var newDiv = document.createElement("div");
            newDiv.setAttribute('class', 'row h4');
            var newLink = document.createElement('a');
            newLink.setAttribute('href', 'https://en.wikipedia.org/?curid=' + pages[i].pageid);
            newLink.setAttribute('target', '_blank');
            newLink.innerText = pages[i].title;
            newDiv.appendChild(newLink);
            document.getElementById("wiki").appendChild(newDiv);

        };
    }

    // Send API request
    connect.send();

}