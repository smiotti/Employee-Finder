// *** Dependencies ***
// Including the path package to get the correct file path for our html


//  may need to add/remove this for express
// const express = require("express");


// requiring in the path package need for referening absolute paths used by the HTML files
const path = require('path');


// *** ROUTING ***
// A GET Route to /survey which should display the survey page to the ueser.
// A default, catch-all route that leads to home.html which displays the home page to the user.

module.exports = function(app) {
  
  // Setting up the route to serve up the Survey html file.
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
    // console.log(req.method);
    // console.log(req.body);
    
  });


  // If no matching route is found, goto homepage
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
