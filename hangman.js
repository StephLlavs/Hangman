var dictionary = ['music', 'mountain', 'forest', 'florida', 'sweden', 'golf'];
var wordUsed, input, placeHolder; 

function startGame()
{
    placeHolder = "";
    var totalGuesses = 10;
    wordUsed = dictionary[Math.floor(Math.random() * dictionary.length)];
    console.log(wordUsed);

    //var buttonText = document.getElementById("button").innerHTML = "LetterGuess";

    for(var i = 0; i < wordUsed.length; i++)
    {
        placeHolder += "_ ";
    }

    //document.getElementById("placeHolder").innerHTML = placeHolder;
    //document.getElementById("gamestatus").innerHTML = "Game is in progress.";

}

function guess()
{
    var correctGuess = false;
    var ip = document.getElementById("letterGuess");
    input = ip.value;

    for(var i = 0; i < wordUsed.length; i++)
    {
        if(input == wordUsed.substring(i, i + 1))
        {
            correctGuess = true;
            placeHolder = placeHolder.substring(0, i) + input + placeHolder.substring(i + 1, placeHolder.length + 1);
            document.getElementById("placeHolder").innerHTML = placeHolder;
        }
    }
    if(!correctGuess)
    {
        totalGuesses--;
    }
    if(placeHolder == wordUsed)
    {
        alert("You WIN!");
    }
    if(totalGuesses == 0)
    {
        alert("You LOSE!")
        startGame();
    }
}
startGame();
//document.getElementById("button").addEventListener("click", Letterguess);