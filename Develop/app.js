//creating dependencies
var express = require("express");

//setting up express server
var app = express();

var PORT = process.env.PORT || 3306;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Setting up "route" files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//setting up the listener to start server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  