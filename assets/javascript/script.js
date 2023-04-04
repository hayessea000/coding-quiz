var quizEvent = document.querySelector("body");
var startBox = document.querySelector("#start");
var questionHeader = document.querySelector("#question");
var answer1 = document.querySelector("#a1");
var answer2 = document.querySelector("#a2");
var answer3 = document.querySelector("#a3");
var answer4 = document.querySelector("#a4");
var quizStatus= "start"
var answerStatus
var score= 0
var element
var timer
var questionCount
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

var startTimer= function () {
    var timeLeft= 15;
    timer = setInterval(function() {
        timeLeft--;
        var timeEl = document.querySelector("#timer");
        timeEl.textContent = timeLeft + " seconds left to finish.";
        if(timeLeft === 0) {
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
    console.log(questionCount)
    
}

var checkAnswer= function(){
    if (answerStatus==="correct"){
        console.log("cor")
        score++
        element.setAttribute("data-status", "incorrect")
    }else {
        console.log("in")
    }
    if (questionCount!== questions.length){
        runQuestions()
    }else {
        console.log("done");
        console.log("score:"+score);
        clearInterval(timer);
        hiScoreChanger()
    }
}

var hiScoreChanger= function(){
    quizStatus= "hiScore"
    questionHeader.textContent= "";
    answer1.textContent= "";
    answer2.textContent= "";
    answer3.textContent= "";
    answer4.textContent= "";
    console.log("final")
    var setName = prompt("Please enter your name");
    var newScore = document.createElement("li");
    newScore.textContent = score +" "+ setName;
    var leaderboard = document.querySelector("#hiScore");
    leaderboard.appendChild(newScore);






    var quizScreen = document.querySelector("#quizBlock");
    quizScreen.setAttribute("class", "hidden") ;  
    var hiScoreScreen = document.querySelector("#hiBlock"); 
    hiScoreScreen.setAttribute("class", "box")
}

var startUp =function(){
    questionCount = 0
    startTimer()
    runQuestions()
    
}

quizEvent.addEventListener("click", function(event) {
    if(quizStatus=="start"){
        element = event.target;    
        if (element.matches("#start")){
        startBox.remove()
        quizStatus= "quiz"
        startUp()
        }
    }if(quizStatus=="quiz"){
        element = event.target;
        if (element.matches(".answer")) {
             answerStatus = element.getAttribute("data-status")
             checkAnswer()
        }
    }
})

