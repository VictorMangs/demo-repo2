function rand(low,high,difficulty) {
  return (Math.floor(Math.random() * (high - low) ) + low)*difficulty
}

function check(difficulty){
  var randnum = rand(low,high,difficulty)
  var final = play(low,high,difficulty, randnum)
}

function play(low,high,difficulty,randnum,person) {
  for (i=(24/difficulty); i>0;i--){
    var guess = prompt("What do you think the number is?", "")

    if (guess < randnum){
      console.log("Higher! " + (i-1) + " more tries!")
    }else if (guess > randnum){
      console.log("Lower! " + (i-1) + " more tries!")
    }else if (guess == randnum) {
      console.log("You got it!")
      return randnum
      break;
    }else {
      console.log("Please put in a number!")
    }
  }
  console.log('No! You almost had it!')
  console.log("The answer was " + randnum + "!")
}

var person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  console.log("Hello " + person + "! How are you today? Let's get started! Today, we will play a guessing game!");
} 

var low = Math.floor(Math.random()*101)
var high = Math.floor(Math.random()*101)


var difficulty = prompt("Please pick a difficulty (1-easy, 2-medium, 3-hard", "");

if (isNaN(difficulty)) {
  console.log('Stop messing up my code!'); 
} else if (Math.floor(difficulty)<=3 && Math.floor(difficulty)>=1) {
  check(difficulty)
} else {
  console.log('Not a valid number')
}

console.log("Where is this")

//This is the end