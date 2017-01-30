$(document).ready(function() {

    //dialog box when user clicks on how to button
    $("#how-to").click(function() {
      Command: toastr["info"]("Click on any of the 7 chakras to do the exercises, and submit your input")

      toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-left",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "10000",
        "timeOut": "100000",
        "extendedTimeOut": "10000"
      }
    })

    //get current chakra
    var currentChakra = $('body').attr('data-chakra')
    //adding click event to submit button
    $("#submitButton").on("click", function() {
        //get value from the three textarea input
        var textOne = $("#comment-one").val();
        var textTwo = $("#comment-two").val();
        var textThree = $("#comment-three").val();


        var aInputFields = [
          {
            updateElementID : "entry-one",
            userInput: textOne
          },
          {
            updateElementID : "entry-two",
            userInput: textTwo
          },
          {
            updateElementID : "entry-three",
            userInput: textThree
          }
        ];

        //loop to check if inputs have a value
        $.each(aInputFields, function( i, elementData) {

          var $updateElement = $('#' + elementData.updateElementID);

          if(elementData.userInput !== "") {
            $updateElement.text('Previous entry: ' + elementData.userInput);
          }
        });


          //emptying textarea fields after input
          $("#comment-one").val("");
          $("#comment-two").val("");
          $("#comment-three").val("");

          //
          // $("#entry-one").text('Previous entry: ' + textOne);
          // $("#entry-two").text('Previous entry: ' + textTwo);
          // $("#entry-three").text('Previous entry: ' + textThree);

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
                toastr.success('Your input is saved.', 'Success!');
            },
            error: function(xhr, status, error) {

            },
            dataType: 'text'
        });
    }
});
