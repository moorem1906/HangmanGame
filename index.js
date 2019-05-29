<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Coding Hang Man</title>
        <!--Added the Bootstrap link-->
    <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">;
    <link rel="stylesheet" href="asset\css\style.css">;
    
</head>
<body>
    <script>
    <div><span style="color: black">Coding Concepts and Keywords </span></div>
    <h1><span style="color:gold">Coding Hang Man</span></h1>
//Create word choice within an array
var array = ["javascript", "polyfield", "consolelog", "Array", "loops", "functions",];

//Choose word randomly with the Math.Random
var randomNumber = Math.floor(Math.random() * word.length);
var wordChoice = word[randomNumber];
var underScore = [];
console.log(randomNumber);

//This creates the underscore based on the length of the word
var generateUnderscore = () => {
    for(var i = 0; i < wordChoice.length; i++) {
            underScore.push('_');
    }
    return underScore;
}
 console.log(generateUnderscore());
 //What is the User's guess -- this requires an event capture
 document.addEventListener('keypress', (event) => {
    console.log(event);
 });



 //Check if the guess is correct

 //If right 

 //If wrong       

    












<footer>The Bone Collector</footer>
</script>
</body>
</html>