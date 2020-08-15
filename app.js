//creating dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
//setting up express server
const app = express();

const PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// Setting up "route" files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//setting up the listener to start server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  