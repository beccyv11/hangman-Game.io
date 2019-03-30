$(document).ready(function() {

    // Here we are provided an initial array of letters.
    // Use this array to dynamically create buttons on the screen.
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

    // 1. Create a for-loop to iterate through the letters array.
    for (i=0; i<letters.length; i++) {
    // Inside the loop...

    // 2. Create a variable named "letterBtn" equal to $("<button>");
      var letterBtn = $("<button>");
    // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
      letterBtn.addClass("letter-button");
      letterBtn.addClass("letter");
      letterBtn.addClass("letter-button-color");
    // 4. Then give each "letterBtn" an attribute called "data-letter", with a value eqaual to "letters[i]"
        letterBtn.attr("data-letter", letters[i]);
    // 5. Then give each "letterBtn" a text equal to "letters[i]".
          letterBtn.text(letters[i]);
    // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        $("#buttons").append(letterBtn);
    // Be sure to test that your code works for this major task, before proceeding to the next one!
    }
    
    $(".letter-button").on("click", function () {
    // 8. Create a variable called "fridgeMagnet" and set the variable equal to a new div.
        var fridgeMagnet= $("<div>");
    // 9. Give each "fridgeMagnet" the following classes: "letter fridge-color".
        fridgeMagnet.addClass("letter fridge-color")
    // 10. Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))
        .text($(this).attr("data-letter"));
    // 11. Lastly append the fridgeMagnet variable to the "#display" div (provided);
        $("#display").append(fridgeMagnet);
    })
    
     // 12. Create an "on-click" event attached to the "#clear" button id.
     $("#clear").on("click",function(){
        $("#display").empty();
    })
    // Inside the on-click event...

    // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.

// // Selecting a Category 
// var button = document.getElementById("chooseWord");
// var word= ["red socks", "giants", "yankees", "athletics", "mets", "royals", "rangers"];
//  button.onclick= function() {
// (category[Math.floor(Math.random()*word.length)]);

//  }

 // Selecting a word from the category



 

// Create geusses ul
result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }


 // Play 


// Funtion is run whenever the user presses a key.
document.onkeyup = function(event){
    // determines which key is pressed
        var userGuess = event.key;
}
  


});

 