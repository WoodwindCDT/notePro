const path = require('path');
const router = require('express').Router();

// GET functions for getting to specfic HTML
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
});

router.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '../../Develop/public/notes.html'));
});

module.exports = router;