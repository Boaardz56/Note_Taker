const fs = require('fs');
const uniqid = require('uniqid');

module.exports = function(app) {

    //GET /api/notes 
    app.get("/api/notes", function(req, res) {
        //Should read the db.json file and return all saved notes as JSON
        fs.readFile("db/db.json", (err, data) => {
            if (err) throw err;
            var notes = JSON.parse(data);
            console.log("THIS IS DATA", notes)
            res.json(notes);
            
        })

    })
    // POST /api/notes 
    app.post("/api/notes", function(req, res) {
        // Should receive a new note to save on the request body,
        var id = uniqid()
        var addNote = {
            id: id,
            title: req.body.title,
            text: req.body.text
        }
        
       // then return the new note to the client
        fs.readFile("db/db.json", (err, data) => {
            if (err) throw err;
            var notes = JSON.parse(data);
            notes.push(addNote);
            //write files
            fs.writeFile("db/db.json", JSON.stringify(notes), (err) => {
                if (err) throw err;
                console.log("added");
            })
        });
    })

  

//  //DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to  delete. 
    app.delete("/api/notes/:id", function(req, res) {
        var notes = req.body;
        var id = parseInt(req.params.id);
        
        Notes.removeNotes(id, (err,notes) => {
            if (err) throw err;
            res.json(notes);
        })
        
        // for (var i=0; i < notes.length; i++) {
        //     if (deleteID === notes[i].id) {
        //         notes.splice(i,1);
        //         console.log("WHERE IS THIS", i,1)
        //         var noteJSON = JSON.stringify(notes);
        //         fs.writeFile("db/db.json", noteJSON), (err) => {
        //             if (err) throw err;
        //             console.log("data added");
        //         };
        //     };
       
        
      });

};