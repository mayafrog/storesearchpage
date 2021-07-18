var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  database: "store_database" // insert name of database HERE
});

// GET ALL GAMES
router.get("/get_games.json", function (req, res, next) {
  con.query("SELECT games.name, games.price, genre.genre_name, feature.feature_name, platform.platform_name FROM games INNER JOIN genre ON games.genre_id = genre.id INNER JOIN platform on games.platform_id = platform.id INNER JOIN feature on games.feature_id = feature.id;", function (err, result, fields) {
    res.send(result);
  });

});


// SEARCH GAMES
router.post("/search_games.json", function (req, res, next) {
  // we receive the request,
  // and then we query the sql database to search
  search_name = req.body.search_name;
  search_price = req.body.search_price;
  search_genre = req.body.search_genre;
  search_features = req.body.search_features;
  search_platform = req.body.search_platform;

  // check if price not entered
  if (!search_price) {
    con.query("SELECT games.name, games.price, genre.genre_name, feature.feature_name, platform.platform_name FROM games INNER JOIN genre ON games.genre_id = genre.id INNER JOIN platform on games.platform_id = platform.id INNER JOIN feature on games.feature_id = feature.id WHERE games.name LIKE ? AND genre.genre_name LIKE ? AND feature.feature_name LIKE ? AND platform.platform_name LIKE ?", ['%' + search_name + '%', '%' + search_genre + '%', '%' + search_features + '%', '%' + search_platform + '%'], function (err, result, fields) {
      res.send(result);
    });
  } else {
    con.query("SELECT games.name, games.price, genre.genre_name, feature.feature_name, platform.platform_name FROM games INNER JOIN genre ON games.genre_id = genre.id INNER JOIN platform on games.platform_id = platform.id INNER JOIN feature on games.feature_id = feature.id WHERE games.name LIKE ? AND games.price <= ? AND genre.genre_name LIKE ? AND feature.feature_name LIKE ? AND platform.platform_name LIKE ?", ['%' + search_name + '%', search_price, '%' + search_genre + '%', '%' + search_features + '%', '%' + search_platform + '%'], function (err, result, fields) {
      res.send(result);
    });
  }
});