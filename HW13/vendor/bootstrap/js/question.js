//app.js for quizIndex.html contains questions to display

//write function after creating arrays for questions; use constructor function from question.js
function populate() {
    if(quiz.isEnded()) { //ends the quiz after last question
        //showScores();
    }

    else {
        // show questions to paragraph id="question"
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text; //display question from question index
    }
}



var questions = [
    new Question("Which magical power would you like to have?", ["Flight", "Invisibility", "Ultimate Knowledge", "Time Travel"], "Time Travel") //last element outside of second array is the "correct answer"
    new Question("Which magical power would you like to fictional character would you like to be?", ["Harry Potter", "Robin Hood", "Nancy Drew"], "Nancy Drew")
    new Question("What do you like to do in your free time?", ["Playing Sports", "Solving puzzles", "Reading"], "Solving Puzzles");
    new Question("Which magical power would you like to fictional character would you like to be?", ["Harry Potter", "Robin Hood", "Nancy Drew"], "Nancy Drew");
];

//create object from quizController file
var quiz = new Quiz(questions);

//call function that will populate the questions and check 
populate();

