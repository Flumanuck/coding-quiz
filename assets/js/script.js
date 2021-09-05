var timerEl = document.querySelector('#timer');
var buttonEl = document.querySelector("#btn");
var highScore = document.querySelector("#high-score");
var currentQuestionIndex = 0

// var questions = [
//   "Which of these is a NOT a proper statement in Javascript?",
//   "Which of these is the proper file extention for Javascript?",
//   "Ideally, how many h1 elements should a single html file have?",
//   'What is the keyboard shortcut to "Open in default browser" in VS code?',
//   'In CSS, how do you make an element change when hovered over?'
// ];

var questions = [
  {
    question:"Which of these is a NOT a proper statement in Javascript?",
    choices:["if", "else", "else if", "if else"],
    correctAnswer:"if else"
  },
  {
    question:"Which of these is the proper file extention for Javascript?",
    choices:["if", "else", "else if", "if else"],
    correctAnswer:"if else"
  },
  {
    question:"Ideally, how many h1 elements should a single html file have?",
    choices:["if", "else", "else if", "if else"],
    correctAnswer:"if else"
  },
  {
    question:'What is the keyboard shortcut to "Open in default browser" in VS code',
    choices:["if", "else", "else if", "if else"],
    correctAnswer:"if else"
  },
  {
    question:"In CSS, how do you make an element change when hovered over?",
    choices:["if", "else", "else if", "if else"],
    correctAnswer:"if else"
  }
]

buttonEl.addEventListener('click', function() {
  countdown();
});

function getQuestion(){
  var currentQuestion = questions[currentQuestionIndex]
  

}

for (var i = 0; i < questions.length; i++) {
  console.log ([i], questions[i]);
}

function countdown() {
  var timeLeft = 45;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = "Time left:" + timeLeft
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = 0;
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}