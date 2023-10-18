const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, '/dist/maximiliantauber.com')));

// Send all requests to index.html
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/maximiliantauber.com/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);
