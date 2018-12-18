// *** Dependencies ***
// requiring in the Express module
const express = require('express');
// requiring in the path package need for referening absolute paths used by the HTML files
const path = require('path');
// enstantiate the Express application
const app = express();

// setting up the port number
var PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing.
// Allows the data to be in a readable json format.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets our server to reference the public directory for static assets
app.use(express.static(path.join(__dirname, 'app/public')));

// *** Routes ***
require('./app/routes/api_routes.js')(app);
require('./app/routes/html_routes.js')(app);


// *** Listener ***
app.listen(PORT, function() {
  console.log(`App listening on PORT http://localhost:${PORT}`);
});


