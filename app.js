var express = require("express");
var path = require("path");
let bodyParser = require('body-parser');
var app = express();
var mongoose = require("mongoose");
var Item = require("./model/item.js");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.post('/add', function (req, res) {
  mongoose.connect("mongodb://admin:123456@localhost:27017", { dbName: "manager", useNewUrlParser: true, useUnifiedTopology: true}, function (err) {

    var newItem = new Item({"description": req.body.desc});

    newItem.save((err, Item) => {
      if (err) {
        console.log("Error", err);
      } 
    });
    res.json({ Success: "1" });
  });
});

app.get('/list', function (req, res) {
  mongoose.connect("mongodb://admin:123456@localhost:27017", { dbName: "list", useNewUrlParser: true, useUnifiedTopology: true}, function (err) {
    
    if (err) throw err;

    Item.find((err, response) => {
      res.json(response);
    });

  });
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
