
	
	var letters = [
               "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
               "p","q","r","s","t","u","v","w","x","y","z"
               ];  

   
    for (var i = 0; i < letters.length; i++) {
 	 		answerLetter = "randomLetter";     
 	 		}          
    var wins = 0;
    var losses = 0; 
    var lives = 20;   

	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
		var randomLetter = letters[Math.floor(Math.random() * letters.length)];

 if (userGuess == letters) {
	
	if (userGuess == randomLetter) {
		wins++;
		alert("You are RIDICULOUSLY AWESOMMEE");
	}			
	
	else if (userGuess != randomLetter) {
		lives--;
			if (lives = 0) {
				losses ++;
			alert("i heard you lost just now you ok?");
		}

	}
}

  document.getElementById('winstats').innerHTML = "Wins count" +wins;
	document.getElementById('lossstats').innerHTML = "Losses count" +losses;
	document.getElementById('livesstats').innerHTML = "Lives totals" +lives;
}




