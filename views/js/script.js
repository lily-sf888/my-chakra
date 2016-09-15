$(document).ready(function() {
    //get current chakra
    var currentChakra = $('body').attr('data-chakra')
    //adding click event to submit button
    $("button").on("click", function() {
        //get value from the three textarea input
        var textOne = $("#comment-one").val();
        var textTwo = $("#comment-two").val();
        var textThree = $("#comment-three").val();
        
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
                console.log(data);
            },
            error: function(xhr, status, error) {
                console.log(error);
            },
            dataType: 'text'
        });
    
     }
    
    
    
    
       
    
    

   

    
});