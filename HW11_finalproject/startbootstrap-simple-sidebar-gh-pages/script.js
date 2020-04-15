//final project js
//quiz builder from https://www.sitepoint.com/simple-javascript-quiz/

//create javascript form to direct readers to appropriate books
//references quiz div in html form
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

//functions for quiz
function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

//create questions
const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];

  /*arrays for book choices
var mystery = [
    "Ghost Attack by David Lubar", 
    "Annie's Life in Lists by Kristen Mahoney",
    "The Ambrose Deception"
];
    */

    /*
var adventure = [
    "Enginerds by Jarrett Lerner", 
    "Sled Dog School by Terry Lynn Johnson",
    "Survival Tails: The Titanic by Katrina Charman",
    "Wedgie & Gizmo by Suzanne Selfors"
];
*/

/*
var animals = [
    "Dragon with a Chocolate Heart by Stephanie Burgis",
    "Sled Dog School by Terry Lynn Johnson",
    "Survival Tails:The Titanic by Katrina Charman",
    "Wedgie & Gizmo by Suzanne Selfors"
];
*/

/*
var fantasy = [
    "Bob by Wendy Mass & Rebecca Stead",
    "Cosmic Commandos by Christopher Eliopoulos",
    "Dragon with a Chocolate Heart by Stephanie Burgis",
    "Tumble & Blue"
];
*/