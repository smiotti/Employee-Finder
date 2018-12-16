
// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/employees. This will be used to display a
// JSON of all possible employees.
//
// A POST routes /api/employees. This will be used to handle incoming survey 
// results. This route will also be used to handle the compatibility logic.




// Importing employee data for use in routes 
const employees = require('../data/employees.js');

// Exporting routes
module.exports = function(app){
  
  // Display JSON for all employees.
  app.get('/api/employees', function(req, res) {
    res.json(employees);
    // log a user response to the console for the method being called and the body data
    console.log(req.method + " request");
    console.log(req.body);
  });
  
  
  // Handles incoming survey results and adds to the employee data. This route also used to handle the compatibility logic.
  app.post('/api/employees', function(req, res) {
    employees.push(req.body);
    // res.json(req.body);
    
    res.send('Survey form submitted successfuly!')
    console.log(req.method + " request");
    console.log(req.body);
  
    //   // Respond with success of the delete operation (true or false)
                  //   return res.json({ success: success })
    console.log("Form submit successful!");
    
        // Test code to remove
        // app.post('/', function(req, res) {
        //   console.log(req.body);
        //   res.end();
        // });


    // Here we take the result of the user's survey POST and parse it.
    const userData = req.body;
    // const userScores = userData.scores;

    
    // Finally save the user's data to the employees data (this has to happen AFTER the check. otherwise,
    // the employees data will always return that the user is the user's best match).
    // employees.push(userData);
    

    


  });






                  
                  // // Displays a single employee, or shows 'No employee found'
                  // app.get('/api/employees/:employee', function(req, res) {

                  //   // Grab the selected parameter
                  //   const chosen = req.params.employee;
                  //   console.log(chosen);

                  //   // Filter to show only the selected employee
                  //   for (let i = 0; i < employees.length; i++) {
                  //     if (chosen === employees[i].routeName) {
                  //       return res.json(employees[i]);
                  //     }
                  //   }

                  //   // Otherwise respond with false
                  //   return res.json(false);
                  // });

                  // // Finds the requested employee and replaces it one provided in the request body
                  // app.put('/api/employees/:employee', function(req, res) {

                  //   // Grab the selected parameter
                  //   const chosen = req.params.employee;
                  //   let found = false;

                  //   // Find the specified employee and replace the object with the one provided
                  //   for (let i = 0; i < employees.length; i++) {
                  //     if (chosen === employees[i].routeName) {
                  //       employees.splice(i, 1, req.body);
                  //       found = true;
                  //     }
                  //   }

                  //   if(found){

                  //     // If our requested employee was found, respond with the updated object
                  //     return res.json(req.body)
                  //   } 

                  //   // Otherwise, respond with false
                  //   return res.json(false)
                  // });

                  // // Finds the requested employee and deletes it from the collection
                  // app.delete('/api/employees/:employee', function(req, res) {
                  //   // Grab the selected parameter
                  //   const chosen = req.params.employee;
                  //   let success = false;

                  //   // Find the specified employee and remove it from the collection
                  //   for (let i = 0; i < employees.length; i++) {
                  //     if (chosen === employees[i].routeName) {
                  //       employees.splice(i, 1);
                  //       success = true;
                  //     }
                  //   }

                  //   // Respond with success of the delete operation (true or false)
                  //   return res.json({ success: success })
                  // });
}