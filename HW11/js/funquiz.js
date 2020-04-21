//fun quiz.js

//references to html elements
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

//build the quiz
function buildQuiz() {

}

function showResults() {

}

//display quiz
buildQuiz();

//on submit, show results
submitButton.addEventListener('click', showResults);

//show questions array
const myQuestions = [
    {"Which magical power do you wish you could have?",
    a: "Time travel",
    b: "transport anywhere in the world",
    c: "have all the knowledge in the world"
    },
    //if a--> fantasy, if b-->adventure, if c-->mystery
{ question: "If you could be any fictional character, which one would you be?",
  answers: {
      a: "Harry Potter",
      b: "Nancy Drew",
      c: "Peter Pan"
  },
  //if a--> fantasy, if b-->mystery, if c-->adventure
];