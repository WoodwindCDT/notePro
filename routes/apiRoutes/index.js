const fs = require('fs');
const router = require('express').Router();

let data = JSON.parse(fs.readFileSync("./Develop/db/db.json", "utf8"));

// Const WriteData function to transfrom 
const dataWrite = function() {
    fs.writeFile("./Develop/db/db.json", JSON.stringify(data), err =>{
      if (err) throw err;
    });
};

router.get("/notes", function(req, res) {
    return res.json(data);
});

// POST function to allow pushing of data to JSON File
router.post("/notes", function(req, res) {
    data.push(req.body);
    console.log(data);
    dataWrite();
    return res.json(data);
});

// DELETE function allowing specific ID of recorded note to be deleted on request
router.delete("/notes/:id", function(req, res){
    const id = req.params.id;
    data = data.filter(function(note){
      if (note.id === id){
        return false;
      }
      return true;
    });
    dataWrite();
    return res.json(data);
});

module.exports = router;