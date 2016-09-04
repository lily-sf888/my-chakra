$(document).ready(function() {
    
    //get current chakra
    var currentChakra = $('body').attr('data-chakra')
    
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
        
        getUserData(userInput);
    });
    
    //building data object to send with AJAX request
    var data = {};
    
    var getUserData = function(userInput) {
        data.current = currentChakra;
        data.userInput = userInput;
        
        //ajax request to update-chakra route
        $.ajax({
            type: "POST",
            url: "/update-chakra",
            data: data,
            success: function(data) {
                console.log("it worked!");
            },
            error: function(xhr, status, error) {
                console.log(error);
            },
            dataType: 'text'
        });
    
     }
    
    
    
    
       
    
    

   

    
});