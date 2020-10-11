const express = require('express');
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();

// To parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// To parse incoming JSON data
app.use(express.json());
app.use(express.static('./Develop/public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// To make the server listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});