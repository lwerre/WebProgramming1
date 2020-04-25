//quiz controller holds scores for quiz questions 

//create function 
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

//getquestion
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {
    this.questionIndex++;

    //check if the answer is correct contained in quizController.js
    if(this.getQuestionIndex(question).correctAnswer(answer)) {
        this.score++;
    }
}

