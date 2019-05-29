// create an array with words 
var array = ["javascript", "polyfield", "container", "function", "object", "methods", "bootscrap", "Github", "Gitlab", "Gitbash"];

//Choose words randomly 

var WordChoice = Math.floor(Math.random() * array.length);
var ChooseWord = array[WordChoice];
var correctWord = []; // correct word array
var wrongWord = []; // wrong word array
var underScore = [];
var rightGuess = [];


//Dom manipulation I'm able to write directly to this sections 
var docUnderScore = document.getElementsByClassName('underScore');
var docrightGuess = document.getElementsByClassName('rightGuess');
var docwrongGuess = document.getElementsByClassName('wrongGuess');
//========================================================================================
console.log(ChooseWord);    
//This section creates words randomly basedd on the lenght of wordChoice
var generateUnderscore = () => {  //This part loops through the chooseWord, which also contains the array of words. 
    for (var i = 0; i < ChooseWord.length; i++) {
        underScore.push('_');
        docUnderScore[0].innerHTML = underScore.join(' ');
    }
    return underScore;
}
document.addEventListener('keypress', (event) =>  { 
    var keyWord = String.fromCharCode(event.keyCode); //This section converts the keycode into a string "fromCharCode" was found using GooogleFu
    // console.log(ChooseWord.indexOf(keyWord));
    if(ChooseWord.indexOf(keyWord) > -1 ) { // If the guess is right 
        correctWord.push(keyWord);
        

       underScore[ChooseWord.indexOf(keyWord)] = keyWord; //This section replace underscore with correct letter
       docUnderScore[0].innerHTML = underScore.join(' ');
       docrightGuess[0].innerHTML = correctWord.join(' ');//This section track the user's guess
       if(underScore.join('') === ChooseWord) { //This section will check to see if the guess is correct
           alert("Nice Work....You've won! No Burnpit for thee!!"); //If user guess correctly then I'll alret via popup stating they've won!  
       }
    }
    else{
        wrongWord.push(keyWord); // If the user guess incorrectly then I'll check to see if it's wrong
        docwrongGuess[0].innerHTML = wrongWord;
    }

     // If the guess is wrong     
});

docUnderScore[0].innerHTML = generateUnderscore().join(' ');
//This section tell me if the string that I'm looking for exist. I'm passing in a condition to track if it exist and if it does then I'll return it.














