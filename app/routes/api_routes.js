
// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/employees. This will be used to display a
// JSON of all possible employees.
//
// A POST routes /api/employees. This will be used to handle incoming survey 
// results. This route will also be used to handle the compatibility logic.




// Importing our data for use in our routes below
const employees = require('../data/employees.js');

// Exporting our routes
module.exports = function(app){
  // app.get('/', function(req, res) {
  //   return res.send('Welcome to the Company Directory!');
  // });



  // Display JSON of all possible employees.
  app.get('/api/employees', function(req, res) {
    return res.json(employees);
    const bod = req.body;
    const chosen = req.params.employees;
    console.log(bod);
    console.log(chosen);

  });


  // Handles incoming survey results. This route also used to handle the compatibility logic.
  app.post('/api/employees', function(req, res) {
    employees.push(req.body);
    return res.json(req.body);
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