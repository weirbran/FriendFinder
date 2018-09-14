// series of npm packages that give our server useful functionality

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// tells node that we are creating an "express" server
var app = express();

// sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3001;

// sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  points our server to a series of "route" files.
// give our server a "map" of how to respond when users visit or request data from various URLs.

//apiRoutes is included first b/c that's where we're pulling DATA to display inside our HTML pages
require("./app/routing/apiRoutes")(app);
//htmlRoutes is included b/c we're telling the server what pages it should serve up to the user, depending on what route they use
require("./app/routing/htmlRoutes")(app);

// listener that 'starts' our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
