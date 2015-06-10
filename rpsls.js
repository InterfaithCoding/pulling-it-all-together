//This line indicates that we are using jQuery - a JavaScript library that makes event handling easier for us. We want to use event handling, because we are responding to the player's pick. So when the player clicks on a certain image, we want the game to play.
$(document).ready(function(){

//These seven lines of code affect the border of the image when the player hovers over them. This indicates to the player that the images are clickable.
//We are selection the HTML img tags and applying new CSS rules to the border when our mouse enters, and when our mouse leaves.
  	$('img').on('mouseenter', function() {
  		$(this).css('border', '5px solid #0c595b');
 	});

 	$('img').on('mouseleave', function() {
  		$(this).css('border', '5px dashed #0c595b');
 	});
 	
//This is our main logic for the game. This first line says 'when any of the images in the choices class are clicked, then play the game like so:'
	$('#game-images img').on('click', function(){
		
//Here we are setting the variable userChoice to the value of the image they have clicked. We want this information so we can compare our user choice to our computer choice and decide on a winner.
       var userChoice = ($(this).data('pick'));

//Next we are setting the computer choice randomly
       var computerChoice = Math.random();

		if (computerChoice <= 0.2) {
		    computerChoice = "rock"
		} else if (computerChoice <= 0.4) {
		    computerChoice = "paper"
		} else if (computerChoice <= 0.6) {
		    computerChoice = "scissors"
		} else if (computerChoice <= 0.8) {
		    computerChoice = "lizard"
		} else {
		    computerChoice = "spock"
		}

//Now we have a user choice, which has been set according to click of the player, and a computer choice which has been decided randomly, we can write the logic to compare these two values.
//Our comparison is going to take two parameters - the user choice and the computer choice, which we will call choice 1 and choice 2 for now
		var compare = function(choice1, choice2) {

			//If both the computer and the player chose the same choice, then the game results in a tie
    		if(choice1 === choice2) {
        		return "The result is a tie!";
    		}

    		//This block of code deals with the cases in which the user has chosen rock. We have already dealt with the case in which the computer also chooses rock (see above), so we only need to consider four other scenarios.
		    else if(choice1 === "rock") {
		        if(choice2 === "scissors") {
		            return "Well done, your rock crushed the computer's scissors";
		        }
		        else if(choice2 === "lizard") {
		            return "Well done, your rock crushed the computer's lizard";
		        } 
		        else if(choice2 === "spock") {
		            return "Shame. The computer's spock vapourized your rock";
		        }
		        else {
		            return "Shame. The computer's paper covered your rock";
		        }
		    }

		    //This block of code deals with the cases in which the user has chosen paper
		    else if(choice1 === "paper") {
		        if(choice2 === "rock") {
		            return "Well done, your paper covered the computer's rock";
		        }
		         else if(choice2 === "lizard") {
		            return "Shame, the computer's lizard ate your paper";
		        } 
		        else if(choice2 === "spock") {
		            return "Well done, your paper disproves the computer's spock";
		        }
		        else {
		            return "Shame, the computer's scissors cut your paper";
		        }
		    }

		    //This block of code deals with the cases in which the user has chosen scissors
		    else if(choice1 ==="scissors") {
		        if(choice2 === "rock") {
		            return "Shame, the computer's rock smashed your scissors";
		        }
		         else if(choice2 === "lizard") {
		            return "Well done, your scissors decapitated the computer's lizard";
		        } 
		        else if(choice2 === "spock") {
		            return "Shame. The computer's spock smashed your scissors";
		        }
		        else {
		            return "Well done, your scissors cut the computer's paper";
		        }
		    }

		    //This block of code deals with the cases in which the user has chosen lizard
		      else if(choice1 ==="lizard") {
		        if(choice2 === "rock") {
		            return "Shame, the computer's rock crushed your lizard";
		        }
		         else if(choice2 === "paper") {
		            return "Well done, your lizard ate the computer's paper";
		        } 
		        else if(choice2 === "scissors") {
		            return "Shame. The computer's scissors decapitated your lizard";
		        }
		        else {
		            return "Well done, your lizard poisoned the computer's spock";
		        }
		    }

		    //This block of code deals with the cases in which the user has chosen spock
		      else if(choice1 ==="spock") {
		        if(choice2 === "rock") {
		            return "Well done, your spock vapourized the computer's rock";
		        }
		         else if(choice2 === "paper") {
		            return "Shame, your spock was disproved by the computer's paper";
		        } 
		        else if(choice2 === "scissors") {
		            return "Well done, your spock smashed the computer's scissors";
		        }
		        else {
		            return "Shame, your spock was poisoned by the computer's lizard";
		        }
		    }
		};
       
       //We want to update the instructions, with the results of the game using jQuery. We need to call our compare function, passing in the values of the user choice and the computer choice.
       $(".instructions").text((compare(userChoice, computerChoice)));
      
   	});
});