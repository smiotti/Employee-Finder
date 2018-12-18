// This JS file handles the interaction with the HTML pages and employee data.

  $(function(){
    const validateForm = function () {
      let isValid = true;
  
      // Validating both the "Name" and "Photo" inputs fields in the Survey form are not empty.
      // Sets isValid to false if any are empty

      // !!!!!!!!!!create a for loop here as an alternate option

      $('input').each(function() {
        if (!$(this).val()) {
          isValid = false;
        }
      });
  
      // Using jQuery's each method, loop through the select elements
      // Sets isValid to false if any are unchosen

      // !!!!!!!!!!create a for loop here as an alternate option

      $('.form-control').each(function(i, element) {
        if (!$(this).val()) {
          isValid = false;
        }
      });
  
      return isValid;
    }
  
    const displayModal = function(data) {
  
      // Grab the result from the AJAX post so that the best match's name and photo are displayed.
      $('#closest_Employee').text(data.name);
      $('#closest_photo').attr('src', data.photo);
  
      // Show the modal with the best match
      $('#modal_response').modal('toggle');
    }
  
    const submit = function(e) {
      e.preventDefault();
  
      // If all required fields are filled
      if (validateForm()) {
  
        // Create an object for the user's data
        const userData = {
          name: $('#name').val().trim(),
          photo: $('#photo').val().trim(),
          scores: [
            $('#q1').val(),
            $('#q2').val(),
            $('#q3').val(),
            $('#q4').val(),
            $('#q5').val(),
            $('#q6').val(),
            $('#q7').val(),
            $('#q8').val(),
            $('#q9').val(),
            $('#q10').val()
          ]
        };
  
        // AJAX post the data to the employees API.
        $.post('/api/employees', userData, displayModal);
  
      } else {
  
        // Display an error alert if the form is not valid
        $('#error')
          .text("D'OH! All fields are required.  Please complete the form and try submitting again.")
          .addClass('alert alert-danger font-italic text-center');
      }
    }
  
    $('#submit').on('click', submit)
  })


