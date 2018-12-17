// jQuery handler that runs the encapsulated code when the page is ready.
$(function() {
  // jQuery used to "download" the data from our server
  // Yhen dynamically display this content in our table. 

  const render = function () {
    // Run Query
    runListQuery(); 
  }

  const renderList = function (outputElement, dataList) {
    // Loop through and display each of the customers
      for (let i = 0; i < dataList.length; i++) {

        // Get a reference to the employee list element and populate with employee data
        const output = $(outputElement);

        // Then display the fields in the HTML (Section Name, Photo Link, Scores)
        const listItem = $("<li class='list-group-item mt-4'>");

        listItem.append(
          $("<h4 class=text-success>").text("Name: " + dataList[i].name),
          $("<hr>"),
          $("<h5>").text("Photo: " + dataList[i].photo),
          $("<h5>").text("Scores: " + dataList[i].scores)
        );

        output.append(listItem);
      }  
  }

  const runListQuery = function () {

    // The AJAX function uses the URL of API to GET the associated data  
    $.ajax({ url: "/api/list", method: "GET" })
      .then(function(employeeList) {
        renderList('#employeeList', employeeList);
      });
  }

  // Render our data to the page
  render();
});
