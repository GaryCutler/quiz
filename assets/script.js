// makes intro disappear
var startQuizNow = document.getElementById("start-now");
startQuizNow.addEventListener("click", startQuiz);
let timeEl = document.querySelector("p.time");
let secondsLeft = 60;
let timerInterval;
var right = document.querySelector("#right")
var wrong = document.querySelector("#wrong")
var final = document.querySelector("#final-score")

var questions = [
    {
        question: "Commonly used data types do not include?",
        answers: ["Strings", "Alert", "Numbers", "Booleans"],
        correct: "Alert"
    },
    {
        question: "Arrays in JavaScript can be used to store?",
        answers: ["other arrays", "booleans", "none", "All of the above"],
        correct: "All of the above"
    },
    {
       
        question: "The condition in an if/else statement is enclosed with ______ ?",
        answers: ["Square Brackets", "Parenthesis", "Curly Brackets", "Quotes"],
        correct: "Square Brackets"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables?",
        answers: ["curly bracktes", "quotes", "parenthesis", "commas"],
        correct: "parenthesis"
    }
]
// makes intro disappear
function startQuiz() {
    setTime()
    var intro = document.querySelector(".intro")
    console.log("click", intro)
    intro.style.display = "none";
    var questionScreen = document.querySelector(".question-screen")
    questionScreen.style.display = "block";
    changeQuestion()
}
//question 1 
//TODO 
function changeQuestion(event) {
    var question = document.querySelector(".question-screen h2");
    //correct answer B
    var answer1 = document.querySelector("#answer1")
    var answer2 = document.querySelector("#answer2")
    var answer3 = document.querySelector("#answer3")
    var answer4 = document.querySelector("#answer4")
    console.log(question);
    question.textContent = questions[0].question
    answer1.textContent = questions[0].answers[0]
    answer2.textContent = questions[0].answers[1]
    answer3.textContent = questions[0].answers[2]
    answer4.textContent = questions[0].answers[3]
    answer1.addEventListener("click", changeQuestion2)
    answer2.addEventListener("click", changeQuestion2)
    answer3.addEventListener("click", changeQuestion2)
    answer4.addEventListener("click", changeQuestion2)
    
}
//question 2
function changeQuestion2(event) {
    rightWrong(event, 0)
   
    var question = document.querySelector(".question-screen h2");
    //correct answer A
    var answer1 = document.querySelector("#answer1")
    var answer2 = document.querySelector("#answer2")
    var answer3 = document.querySelector("#answer3")
    var answer4 = document.querySelector("#answer4")
    console.log(question);
    question.textContent = questions[1].question
    answer1.textContent = questions[1].answers[0]
    answer2.textContent = questions[1].answers[1]
    answer3.textContent = questions[1].answers[2]
    answer4.textContent = questions[1].answers[3]
    answer1.addEventListener("click", startQuiz)
    answer1.addEventListener("click", changeQuestion3)
    answer2.addEventListener("click", changeQuestion3)
    answer3.addEventListener("click", changeQuestion3)
    answer4.addEventListener("click", changeQuestion3)
}
//question 3 
function changeQuestion3(event) {
    rightWrong(event, 1)
    var question = document.querySelector(".question-screen h2");
    //correct answer C
    var answer1 = document.querySelector("#answer1")
    var answer2 = document.querySelector("#answer2")
    var answer3 = document.querySelector("#answer3")
    var answer4 = document.querySelector("#answer4")
    console.log(question);
    question.textContent = questions[2].question
    answer1.textContent = questions[2].answers[0]
    answer2.textContent = questions[2].answers[1]
    answer3.textContent = questions[2].answers[2]
    answer4.textContent = questions[2].answers[3]
    answer1.addEventListener("click", startQuiz)
    answer1.addEventListener("click", changeQuestion4)
    answer2.addEventListener("click", changeQuestion4)
    answer3.addEventListener("click", changeQuestion4)
    answer4.addEventListener("click", changeQuestion4)
}
//question 4
function changeQuestion4(event) {
    rightWrong(event, 2)
    var question = document.querySelector(".question-screen h2");
    //correct answer D
    var answer1 = document.querySelector("#answer1")
    var answer2 = document.querySelector("#answer2")
    var answer3 = document.querySelector("#answer3")
    var answer4 = document.querySelector("#answer4")
    console.log(question);
    question.textContent = questions[3].question
    answer1.textContent = questions[3].answers[0]
    answer2.textContent = questions[3].answers[1]
    answer3.textContent = questions[3].answers[2]
    answer4.textContent = questions[3].answers[3]
    answer1.addEventListener("click", endScreen)
    answer1.addEventListener("click", endScreen)
    answer2.addEventListener("click", endScreen)
    answer3.addEventListener("click", endScreen)
    answer4.addEventListener("click", endScreen)

}
function rightWrong(event, num){
    right.style.display = "none";
    wrong.style.display ="none";
    if (event.target.textContent === questions[num].correct)
    right.style.display = "block";
    else 
    wrong.style.display ="block";
}   
//funtion to close questions and display end
//TODO set timer to 0
function endScreen() {
    clearInterval(timerInterval);
    var questionScreen = document.querySelector(".question-screen")
    questionScreen.style.display = "none";
    var endScreen = document.querySelector(".end-screen")
    endScreen.style.display = "block";
    console.log(secondsLeft)
    final.append("final score = ", secondsLeft)
}

//add answers(take the array),answer the question: check if right or wrong, display wrong or right and change the index of quuestion



// timer
function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = `Time:${secondsLeft}s`;

        if (secondsLeft ===0) {
            clearInterval(timerInterval);
            endScreen()
            
        }
    }, 1000);
}

// // TODO local storage: activity 20-26 web api 
// var txt1 = document.querySelector("#initials");
// var submitBut = document.querySelector("#submitBut");
// var submit1 = document.querySelector("#submit1");
// localStorage.setItem("initials", initials)
// submitBut.addEventListener("click", please )
//  function please(){
//     txt1 = localStorage.getItem("initials")
//     console.log(txt1)
//  }

