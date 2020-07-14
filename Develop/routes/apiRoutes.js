var database = require("../db/db");

module.exports = function(app) {
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
    return console.log("adding notes worked", addNote.title);
})

//DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to  delete. 
//This means you'll need to find a way to give each note a unique id when it's saved. 
//In order to delete a note, you'll need to read all notes from the db.json file, 
//remove the note with the given id property,
// and then rewrite the notes to the db.json


};