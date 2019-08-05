document.getElementById("checkButton").onclick = function() {
    var randomNumber = Math.random();
    randomNumber = randomNumber *6;
    randomNumber = Math.floor(randomNumber);
   var checkNumber = document.getElementById("numberEntered").value;
   if(checkNumber == randomNumber)
    {
        alert("You guessed it right :)");
    }

    else
    {
        alert("You are wrong -_-, the number was " + randomNumber);
    }
}