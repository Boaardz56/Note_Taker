const fs = require('fs');


module.exports = function(app) {

//should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.
fs.readFile("db/db.json", "uft8", (err, data) => {
    if (err) throw err;
    var notes = JSON.parse(data);



    //GET /api/notes 
    app.get("/api/notes", function(req, res) {
        //Should read the db.json file and return all saved notes as JSON
        res.json(notes);
    })

    //POST /api/notes 
    app.post("/api/notes", function(req, res) {
        // Should receive a new note to save on the request body,
        var addNote = req.body;
        // add it to the db.json file,
        notes.push(addNote);
        addFileToDB();
        // then return the new note to the client
        return console.log("adding notes worked", addNote);
    })

  });
//DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to  delete. 
    // app.delete("/api/notes/:id", function(req, res) {

    // })
//This means you'll need to find a way to give each note a unique id when it's saved. 
//In order to delete a note, you'll need to read all notes from the db.json file, 
//remove the note with the given id property, and then rewrite the notes to the db.json


//db.json file on the backend that will store and retrieve notes using fs module
function addFileToDB() {
    fs.writeFile("db/db.json", JSON.stringify(notes,'\t'), err => {
        if (err) throw err;
        return true;
    });
  }


};