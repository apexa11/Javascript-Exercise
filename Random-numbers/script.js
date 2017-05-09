var input1 = prompt("enter your bottomNumber");
var bottomNum = parseInt(input1);
/* create prompt() for user input */
var input = prompt("Enter your topNumber");
/* convert string input to integer */
var topNum= parseInt(input);
/* create random number */
var randomNum = Math.floor(Math.random()* (topNum - bottomNum)+1) + bottomNum;
/* print random number */
document.write(randomNum +" " + "is random number between" + " " + topNum +" "+ "and" +" " + bottomNum);