/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

/* The quotes is a array of object, that contain manual quote, source, citation, year*/
var quotes = [
  {
   quote:"I am what they say I am",
   source:"Geralt of Rivia",
   citation:"Withcher",
   year: 2019
},

  {
  quote:"I love it when my plan comes together ",
  source:"Hannibal Smith",
  citation:"A-team",
  year: 2014
},
  {
    quote:"I'll be back",
    source:"Arnold Schwarzenegger",
    citation:"Terminator"
},

  {
  quote:"Whoever Comes, Whoever It Is...I’ll Kill Them. I’ll Kill Them All.",
  source:"John Wick",
  citation:"John Wick 2",
},
  {
  quote:"Treehouse is the best",
  source:"Me",
  year: 2019
  }

];


/***
 * `getRandomQuote` function
***/

/* this is a function that will get random only one of the object from the quotes variable, and the end of the function it will return random one value*/

function getRandomQuote(arr) {

  var arr = quotes;
  
  /* the randomNum variable is to generate a number between 0 to the quotes's length */ 
  var randomNum = Math.floor(Math.random() * arr.length) ;

  return arr[randomNum]


}




/***
 * `printQuote` function
***/




/*This random color idea is get from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php and previos techdegree course    */

function randomRGB(){

return Math.floor(Math.random() * 256);

}

function randomColor() {


  var color = 'rgb(' + randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  

  document.body.style.background = color;
  }


/*** This printQuote function is to print the one of the  quotes including its source, citation, year (if the citation and year is valid) 

    before it print the quote to the browser, I have delete the entire index.html manual quotes
    the class in <p> it's give the html have the power of CSS

    if statement is to make sure the quotes only print the year and citation if there is true and valid on quotes variable

    the outputDiv is important, it make all the quote value to the HTML tag which the tag contain the id = quotes-box
***/



function printQuote(arr){

  var arr = quotes;
  var getQuote = getRandomQuote(quotes);
  var resultQuote = ''

  resultQuote = '<p class="quote">' + getQuote.quote + '</p>';
  resultQuote += '<p class="source">' + getQuote.source;
  
  if (getQuote.citation){
    resultQuote += '<span class="citation">' + getQuote.citation + '</span>';
 }

 if (getQuote.year){
  resultQuote += '<span class="year">' + getQuote.year + '</span></p>';
}

  

  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = resultQuote;

  randomColor()
}




/* The setInterval idea is learn from https://www.w3schools.com/jsref/met_win_setinterval.asp */
/* meaning every 10 second will call the function  */

setInterval(printQuote,10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

