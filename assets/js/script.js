var timerEl = document.querySelector('#timer');
var buttonEl = document.querySelector("#btn");
var highScoreEl = document.querySelector("#high-score");
var currentQuestionIndex = 0
var welcomeScreenEl = document.getElementById("welcome-screen")
var answer1 = document.createElement('button');
var answer2 = document.createElement('button');
var answer3 = document.createElement('button');
var answer4 = document.createElement('button');
var choiceEl = document.querySelector('#choices');
var questionsEl = document.getElementById('questions');
var questionTitleEl = document.getElementById('question-title');
var questions = [
  {
    question: "Which of these is a NOT a proper statement in Javascript?",
    choices: ["if", "else", "else if", "if else"],
    correctAnswer: "if else"
  },
  {
    question: "Which of these is the proper file extention for Javascript?",
    choices: ["js", "jvs", "java", "jvsc"],
    correctAnswer: "if else"
  },
  {
    question: "Ideally, how many h1 elements should a single html file have?",
    choices: ["Only one", "As many as I like", "None, if possible", "As many as there are div elements"],
    correctAnswer: "Only one"
  },
  {
    question: 'What is the keyboard shortcut to "Open in default browser" in VS code',
    choices: ["alt + b", "shift + tab", "alt + f4", "ctrl + b"],
    correctAnswer: "alt + b"
  },
  {
    question: "In CSS, how do you make an element change when hovered over?",
    choices: ["element:hover", "element.hover", "hover=active", "hover.element"],
    correctAnswer: "element:hover"
  }
]
var timeLeft = questions.length * 15;
var timeInterval;
var scoreEl = document.getElementById('final-score')
var highScoreNameEl = document.getElementById('playerName')
var highScoreScoreEl = document.getElementById('finalScore')

function startQuiz() {
  welcomeScreenEl.setAttribute('class', 'hide');
  questionsEl.removeAttribute('class');
  countdown();
  getQuestion();
}

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion.question, currentQuestion.choices, currentQuestion.correctAnswer)
  questionTitleEl.textContent = currentQuestion.question;
  console.log(currentQuestion.question)
  currentQuestion.choices.forEach(function (choice) {
    answer1.textContent = currentQuestion.choices[0];
    answer2.textContent = currentQuestion.choices[1];
    answer3.textContent = currentQuestion.choices[2];
    answer4.textContent = currentQuestion.choices[3];
    choiceEl.appendChild(answer1);
    choiceEl.appendChild(answer2);
    choiceEl.appendChild(answer3);
    choiceEl.appendChild(answer4);
    answer1.setAttribute('class', 'choices')
    answer1.setAttribute('value', currentQuestion.choices[0])
    answer2.setAttribute('class', 'choices')
    answer2.setAttribute('value', currentQuestion.choices[1])
    answer3.setAttribute('class', 'choices')
    answer3.setAttribute('value', currentQuestion.choices[2])
    answer4.setAttribute('class', 'choices')
    answer4.setAttribute('value', currentQuestion.choices[3])
    choiceEl.setAttribute('style', 'display: flex; flex-direction: column; align-items: center');
    answer1.onclick = questionClick;
    answer2.onclick = questionClick;
    answer3.onclick = questionClick;
    answer4.onclick = questionClick;
    console.log(choice)
  })
}
function questionClick() {
  if (this.value !== questions[currentQuestionIndex].correctAnswer) {
    timeLeft -= 10;
  }
  timerEl.textcontent = "Time left:" + timeLeft;
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    quizEnd()
  }
  else {
    getQuestion();
  }
}




function quizEnd() {
  clearInterval(timeInterval);
  questionTitleEl.setAttribute('class', 'hide');
  answer1.setAttribute('class', 'hide');
  answer2.setAttribute('class', 'hide');
  answer3.setAttribute('class', 'hide');
  answer4.setAttribute('class', 'hide');
  scoreEl.setAttribute('style', 'font-size: 50px')
  scoreEl.textContent = "Your final score is: " + (timeLeft + 1);
  nameInput();
}

function nameInput() {
  var name = window.prompt("Please type in your initials to save your score.")
  localStorage.setItem('player', name);
  localStorage.setItem('finalScore', (timeLeft + 1));
}

function nameRead() {
  var player = localStorage.getItem('player');
  var finalScore = localStorage.getItem('finalScore');
  welcomeScreenEl.setAttribute('class', 'hide');
  questionTitleEl.setAttribute('class', 'hide');
  answer1.setAttribute('class', 'hide');
  answer2.setAttribute('class', 'hide');
  answer3.setAttribute('class', 'hide');
  answer4.setAttribute('class', 'hide');
  scoreEl.setAttribute('class', 'hide');
  timerEl.setAttribute('class', 'hide');
  clearInterval(timeInterval);
  highScoreNameEl.setAttribute('style', 'font-size: 50px; color: red;')
  highScoreScoreEl.setAttribute('style', 'font-size: 50px; color: cyan;')
  highScoreNameEl.textContent = player;

  highScoreScoreEl.textContent = finalScore;
}


function countdown() {


  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = "Time left:" + timeLeft
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      timeLeft = 0;
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = "Time's up!";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      quizEnd();
    }
  }, 1000);
}

highScoreEl.onclick = nameRead;

buttonEl.onclick = startQuiz;