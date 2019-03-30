$(document).ready(function() {

    var words = ["red socks", "giants", "yankees", "athletics", "mets", "royals", "rangers"];
    // Choose Random Word 
    var word = words[Math.floor(Math.random() * words.length)];

    // Creatimg an answer array 
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    }
    var remainingLetters = word.length;


    // Here we are provided an initial array of letters.
    // Use this array to dynamically create buttons on the screen.
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

   // For-loop to iterate through the letters array.
   for (i=0; i<letters.length; i++) {
    // Inside the loop...
      var letterBtn = $("<button>");
      letterBtn.addClass("letter-button");
      letterBtn.addClass("letter");
      letterBtn.addClass("letter-button-color");
      letterBtn.attr("data-letter", letters[i]);
      letterBtn.text(letters[i]);
      $("#buttons").append(letterBtn);
    }
             $(".letter-button").on("click", function () {
            //  Create a variable called "fridgeMagnet" and set the variable equal to a new div.
                var letterGuess= $("<div>");
            //  Give each "fridgeMagnet" the following classes: "letter fridge-color".
                letterGuess.addClass("letter letter-color")
            //  Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))
                .text($(this).attr("data-letter"));

            //  Lastly append the fridgeMagnet variable to the "#display" div (provided);
                $("#display").append(letterGuess);
            })
        
    // Show the player their progress
    

    }
    
    $(".letter-button").on("click", function () {
    // 8. Create a variable called "fridgeMagnet" and set the variable equal to a new div.
        var letterGuess= $("<div>");
    // 9. Give each "fridgeMagnet" the following classes: "letter fridge-color".
        letterGuess.addClass("letter letter-color")
    // 10. Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))
        .text($(this).attr("data-letter"));


    // 11. Lastly append the fridgeMagnet variable to the "#display" div (provided);
        $("#display").append(letterGuess);
    })
    
     // 12. Create an "on-click" event attached to the "#clear" button id.
     $("#clear").on("click",function(){
        $("#display").empty();
    })
    // Inside the on-click event...

    // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.



//  // Play 


// // Funtion is run whenever the user presses a key.
// document.onkeyup = function(event){
//     // determines which key is pressed
//         var userGuess = event.key;
// }
  


});


