
// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/employees. This will be used to display a
// JSON of all possible employees.
//
// A POST routes /api/employees. This will be used to handle incoming survey 
// results. This route will also be used to handle the compatibility logic.


// 6. Determine the user's most compatible employee using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example: 
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
//    * The closest match will be the user with the least amount of difference.


// Importing employee data for use in routes 
const employees = require('../data/employees.js');

// Exporting routes
module.exports = function (app) {
  

  app.get('/api/list', function(req, res) {
    res.json(employees);
  });

  // Display JSON for all employees.
  app.get('/api/employees', function(req, res) {
    res.json(employees);
    // log a user response to the console for the method being called and the body data
    console.log(req.method + " request");
    console.log(req.body);
  });


  // Handles incoming survey results and adds to the employee data. 
  // This route also used to handle the compatibility logic.
  app.post('/api/employees', function (req, res) {
    console.log(req.method + " request");
    console.log(req.body);
   

    // Defining object that will be used to hold the closed matched employee, as the employee list is looped through. 
    const closestMatch = {
      name: '',
      photo: '',
      employeeDifference: Infinity
    };

    // Parse result of the user's survey POST request
    const userData = req.body;
    const userScores = userData.scores;
    // console.log('userData' + userData);
    console.log('*** userScore(s) before parseint ****' + req.body.scores);


    // variables used to calculate the absolute difference between the user's scores and the scores of
    // each employee in the data file.  
    let absoluteDifference
    let totalDifference

    // Looping through each of the employee possibilities in the employees data.
    for (let i = 0; i < employees.length; i++) {
      const currentEmployee = employees[i];
      absoluteDifference = 0;
      totalDifference = 0;

      // Looping through all the scores for each employee
      for (let j = 0; j < currentEmployee.scores.length; j++) {
        const currentEmployeeScore = parseInt(currentEmployee.scores[j]);
        const currentUserScore = parseInt(userScores[j]);
    

        // First calculate the absolute difference between the user and employee scores
        // Then update the total (or sum) of the differences.  Logging calculations to console
        absoluteDifference = Math.abs((currentUserScore) - (currentEmployeeScore));
        totalDifference += absoluteDifference; 
        console.log(`${userData.name} Score: ${currentUserScore}`);
        console.log(`${currentEmployee.name} Score: ${currentEmployeeScore}`);
        console.log(`Abs Difference = ${parseInt(currentUserScore)} - ${parseInt(currentEmployeeScore)} = ${absoluteDifference}`)
        console.log(`${userData.name} Total Difference: ${totalDifference}`);
      }

      // If the sum of differences is less then the differences of the current 'closest match'
      if (totalDifference <= closestMatch.employeeDifference) {
        // Reset the closestMatch to be the new employee.
        closestMatch.name = currentEmployee.name;
        closestMatch.photo = currentEmployee.photo;
        closestMatch.employeeDifference = totalDifference;
      }
    }


    // Looping through the User's scores and converting to integers before witing out to Employee file
    for (let i = 0; i < userData.scores.length; i++) {
      userScores[i] = parseInt(userData.scores[i]);
    }
    // console.log(`*** updating user scores to integer ****  ${userScores}`);


    // Save the user's data to the employees data file. 
    employees.push(userData);
    console.log(`${userData.name}'s closest match is ${closestMatch.name}, with a difference of ${totalDifference}.`);
    console.log("*** Form submit successful! ***");

    
    // Return JSON with the user's closestMatch. This will be used by the HTML in the next page
    res.json(closestMatch);
  });
};



// res.send('Survey form submitted successfuly!')


// Respond with success of the delete operation (true or false)
      // res.json({ success: success })
    
