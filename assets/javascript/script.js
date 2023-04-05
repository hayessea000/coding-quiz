var quizEvent = document.querySelector("body");
var startBox = document.querySelector("#start");
var questionHeader = document.querySelector("#question");
var leaderboard = document.querySelector("#hiScore");
var answer1 = document.querySelector("#a1");
var answer2 = document.querySelector("#a2");
var answer3 = document.querySelector("#a3");
var answer4 = document.querySelector("#a4");
var quizScreen = document.querySelector("#quizBlock");
var hiScoreScreen = document.querySelector("#hiBlock");
var newScore = document.createElement("li");
var quizStatus= "start"
var answerStatus
var score= 0
var element
var timeLeft
var timer
var questionCount
var saved
var question1 = {
    q:"which is a color?",
    a1:{name: "blue", status:"correct"},
    a2:{name: "a", status:"incorrect"},
    a3:{name: "3", status:"incorrect"},
    a4:{name: "apple", status:"incorrect"},
}

var question2 = {
    q:"which is a fruit?",
    a1:{name: "blue", status:"incorrect"},
    a2:{name: "a", status:"incorrect"},
    a3:{name: "3", status:"incorrect"},
    a4:{name: "apple", status:"correct"},
}

var question3 = {
    q:"which is a letter?",
    a1:{name: "blue", status:"incorrect"},
    a2:{name: "a", status:"correct"},
    a3:{name: "3", status:"incorrect"},
    a4:{name: "apple", status:"incorrect"},
}

var questions =[question1,question2,question3] 

// var loadScore = function(){
//     saved = JSON.parse(localStorage.getItem("hiScores"));
//     console.log(saved)
//     for( i = 0; i< saved.length; i++){
//         newScore.textContent=saved[i]
//         console.log(newScore.textContent)
//         leaderboard.appendChild(newScore);
//     }
// }

var startTimer= function () {
    timeLeft= 15;
    timer = setInterval(function() {
        timeLeft--;
        var timeEl = document.querySelector("#timer");
        timeEl.textContent = timeLeft + " seconds left to finish.";
        if(timeLeft <= 0) {
            clearInterval(timer);
            hiScoreChanger()
        }
    }, 1000);
}

var runQuestions = function(){
    questionHeader.textContent= questions[questionCount].q;
    answer1.textContent= questions[questionCount].a1.name;
    if(questions[questionCount].a1.status == "correct"){
        answer1.setAttribute("data-status", "correct")
    }
    answer2.textContent= questions[questionCount].a2.name;
    if(questions[questionCount].a2.status == "correct"){
        answer2.setAttribute("data-status", "correct")
    }
    answer3.textContent= questions[questionCount].a3.name;
    if(questions[questionCount].a3.status == "correct"){
        answer3.setAttribute("data-status", "correct")
    }
    answer4.textContent= questions[questionCount].a4.name;
    if(questions[questionCount].a4.status == "correct"){
        answer4.setAttribute("data-status", "correct")
    }
    questionCount++
}

var checkAnswer= function(){
    if (answerStatus==="correct"){
        score++
        element.setAttribute("data-status", "incorrect")
    }else {
        timeLeft= timeLeft-5
    }
    if (questionCount!== questions.length){
        runQuestions()
    }else {
        clearInterval(timer);
        hiScoreChanger()
    }
}

var hiScoreChanger= function(){
    quizStatus= "hiScore";
    quizScreen.setAttribute("class", "hidden") ;  
    hiScoreScreen.setAttribute("class", "hiScore");
    // loadScore()
    saved = JSON.parse(localStorage.getItem("hiScores"));
    console.log(saved)
    for( i = 0; i< saved.length; i++){
        newScore.textContent=saved[i]
        console.log(newScore.textContent)
        leaderboard.appendChild(newScore);
    }
    var setName = prompt("Please enter your name");
    
    var scoreName= setName +" "+ score
    newScore.textContent = scoreName;  
    leaderboard.appendChild(newScore);
    saved.push(scoreName);
    localStorage.setItem("hiScores", JSON.stringify(saved));
    console.log(saved);
}

var startUp =function(){
    questionCount = 0
    score = 0
    quizStatus= "quiz"
    startTimer()
    runQuestions()
    
}

var retake = function(){
    quizScreen.setAttribute("class", "box") ;   
    hiScoreScreen.setAttribute("class", "hidden");
    startUp()
}

quizEvent.addEventListener("click", function(event) {
    if(quizStatus=="start"){
        element = event.target;    
        if (element.matches("#start")){
            startBox.remove()
            startUp()
        }
    }if(quizStatus=="quiz"){
        element = event.target;
        if (element.matches(".answer")) {
             answerStatus = element.getAttribute("data-status")
             checkAnswer()
        }
    }if(quizStatus=="hiScore"){
        element = event.target;
        if (element.matches("#retake")) {
             retake()
        }if (element.matches("#reset")) {
            leaderboard.parentNode.removeChild(leaderboard)
            saved=[]
            localStorage.setItem("hiScores", JSON.stringify(saved));
            console.log("clear")
       }
    }
})

