$(document).ready(function() {

    //dialog box when user clicks on how to button
    $("#how-to").click(function() {

      toastr.options = {
        "closeButton": true,
        "positionClass": "toast-top-left",
        "preventDuplicates": true,
        "showDuration": "20000"
      }

      Command: toastr["info"]("Click on any of the 7 chakras to do the exercises, and submit your input.")
    })

    //get current chakra
    var currentChakra = $('body').attr('data-chakra')

    $("#submitButton").on("click", function() {
        //get value from textarea input
        var textOne = $("#comment-one").val();
        var textTwo = $("#comment-two").val();
        var textThree = $("#comment-three").val();

        //array of objects that store element id and user input
        var inputArray = [
          {
            updateId : "#entry-one",
            userInput: textOne
          },
          {
            updateId : "#entry-two",
            userInput: textTwo
          },
          {
            updateId : "#entry-three",
            userInput: textThree
          }
      ];
      //looping through array and make sure there is no empty string
      $.each(inputArray, function(i, value) {

        if (value.userInput !== "") {
          $(value.updateId).text("Previous entry: " + value.userInput)
        }

      });

        //emptying textarea fields after input
        $("#comment-one").val("");
        $("#comment-two").val("");
        $("#comment-three").val("");

        //setting up object that will store the value from the three textareas
        var userInput = {};
        userInput.textOne = textOne;
        userInput.textTwo = textTwo;
        userInput.textThree = textThree;
        //calling function that triggers the AJAX request
        getUserData(userInput);
    });

    //building data object to send with AJAX request
    var data = {};
    //this function will fire off the AJAX request to the /update-chakra route
    var getUserData = function(userInput) {
        data.current = currentChakra;
        data.userInput = userInput;
        //ajax request to update-chakra route
        $.ajax({
            type: "POST",
            url: "/update-chakra",
            data: data,
            success: function(data) {
                toastr.options.preventDuplicates = true;
                toastr.options.positionClass =  "toast-top-left";
                toastr.success('Your input is saved.', 'Success!');
            },
            error: function(xhr, status, error) {

            },
            dataType: 'text'
        });
    }
});
