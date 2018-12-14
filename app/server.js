// *** Dependencies ***
// requiring in the Express module
const express = require('express');
// requiring in the path package need for referening absolute paths used by the HTML files
const path = require('path');
// enstantiate the Express application
const app = express();
// setting up the port number
const PORT = 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets our server to use the public directory for static assets
app.use(express.static(path.join(__dirname, 'public')));


// *** Routes ***
require('./routes/api_routes.js')(app);
require('./routes/html_routes.js')(app);


// *** Listener ***
app.listen(PORT, function() {
  console.log(`App listening on PORT http://localhost:${PORT}`);
});
