const express = require('express');
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');

// Const WriteData function to transfrom 
const dataWrite = function() {
    fs.writeFile("./Develop/db/db.json", JSON.stringify(data), err =>{
      if (err) throw err;
    });
};

// Added to make later chaining methods
const app = express();

// To parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// To parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));


// GET functions for getting to specfic HTML
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
});

// POST function to allow pushing of data to JSON File
app.post("/api/notes", function(req, res) {
    data.push(req.body);
    console.log(data);
    dataWrite();
    return res.json(data);
});

// DELETE function allowing specific ID of recorded note to be deleted on request
app.delete("/api/notes/:id", function(req, res){
    const id = req.params.id;
    data = data.filter(function(note){
      if (note.id === id){
        return false;
      }
      return true;
    });
    writeData();
    return res.json(data);
});

// To make the server listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});