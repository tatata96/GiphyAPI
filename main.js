//PURE JAVASCRIPT

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);

    return xmlHttp.responseText;
}

async function first() {
    var url =
        "https://api.giphy.com/v1/gifs/trending?api_key=gRfx8pbYF94lhpnkJvxYrdYkWK543m8L&limit=25&rating=G";
    var response = await httpGet(url);
    response = JSON.parse(response);
    console.log(response);
    response.data.forEach(gif => {
        var obj = "<img src='" + gif.images.original.url + "' >";
        document.getElementById("response").innerHTML += obj;
    });
}

async function search() {
    var searchText = document.getElementById("searchText").value;
    document.getElementById("response").innerHTML = "";

    var url =
        "http://api.giphy.com/v1/gifs/search?q=" +
        searchText +
        "&api_key=gRfx8pbYF94lhpnkJvxYrdYkWK543m8L&limit=25";

    var response = await httpGet(url);

    response = JSON.parse(response);

    response.data.forEach(gif => {
        var obj = "<img src='" + gif.images.original.url + "' >";
        document.getElementById("response").innerHTML += obj;
    });
}