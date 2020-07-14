var path = require("path");
var fs = require("fs");
module.exports = function(app) {
// GET /notes - Should return the notes.html file.
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
//GET * - Should return the index.html file
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

//db.json file on the backend that will store and retrieve notes using fs module
function addFileToDB() {
    fs.writeFile("db/db.json", JSON.stringify(notes,'\t'), err => {
        if (err) throw err;
        return true;
    });
  }

};