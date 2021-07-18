//VUE
var vueinst = new Vue({
    el: "#vue",
    data: {
        filter_type: 'simple',
        name: '',
        price: '',
        simple_genre: '',
        advanced_genre: '',
        simple_features: '',
        advanced_features: '',
        simple_platform: '',
        advanced_platform: '',
    }
});

function populate_table(data) {
    clear_table();

    var table = document.getElementById("results");

    for (i = 0; i < data.length; i++) {
        var row = table.insertRow(-1);
        var col1 = row.insertCell(0);
        var col2 = row.insertCell(1);
        var col3 = row.insertCell(2);
        var col4 = row.insertCell(3);
        var col5 = row.insertCell(4);
        col1.innerText = data[i].name;
        col2.innerText = "$" + data[i].price;
        col3.innerText = data[i].genre_name;
        col4.innerText = data[i].feature_name;
        col5.innerText = data[i].platform_name;
    }
}

// helper function
function clear_table() {
    document.getElementById("results").innerText = "";
}

// helper function
function view_games() {
    /* 1. Create new AJAX request */
    var xhttp = new XMLHttpRequest();

    /* 4. Handle response (callback function) */
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            populate_table(JSON.parse(this.responseText));
        }
    };

    /* 2. Open connection */
    xhttp.open("GET", "/get_games.json", true);

    /* 3. Send request */
    xhttp.send();
}

function advanced_search() {
    var search_name = vueinst.name;
    var search_price = vueinst.price;
    var search_genre = vueinst.advanced_genre;
    var search_features = vueinst.advanced_features;
    var search_platform = vueinst.advanced_platform;

    // turn into an object
    var body = {
        search_name: search_name,
        search_price: search_price,
        search_genre: search_genre,
        search_features: search_features,
        search_platform: search_platform
    };

    /* 1. Create new AJAX request */
    var xhttp = new XMLHttpRequest();

    /* 4. Handle response (callback function) */
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            populate_table(JSON.parse(this.responseText));
        }
    };

    /* 2. Open connection */
    xhttp.open("POST", "/search_games.json", true);

    // xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");

    /* 3. Send request */
    xhttp.send(JSON.stringify(body));
}

function simple_search() {
    var search_name = vueinst.name;
    var search_price = vueinst.price;
    var search_genre = vueinst.simple_genre;
    var search_features = vueinst.simple_features;
    var search_platform = vueinst.simple_platform;

    // turn into an object
    var body = {
        search_name: search_name,
        search_price: search_price,
        search_genre: search_genre,
        search_features: search_features,
        search_platform: search_platform
    };

    /* 1. Create new AJAX request */
    var xhttp = new XMLHttpRequest();

    /* 4. Handle response (callback function) */
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            populate_table(JSON.parse(this.responseText));
        }
    };

    /* 2. Open connection */
    xhttp.open("POST", "/search_games.json", true);

    // xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");

    /* 3. Send request */
    xhttp.send(JSON.stringify(body));
}