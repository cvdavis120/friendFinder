var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routing/apiRoutes")(app);

// Here we introduce HTML routing to serve different HTML files
require("./app/routing/htmlRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});