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
var quizStatus= "start";
var answerStatus;
var score= 0;
var element;
var timeLeft;
var timer;
var questionCount;
var saved;
var question1 = {
    q:"Which Is A Color?",
    a1:{name: "Blue", status:"correct"},
    a2:{name: "Three", status:"incorrect"},
    a3:{name: "Rock", status:"incorrect"},
    a4:{name: "Apple", status:"incorrect"},
}

var question2 = {
    q:"Which Is A Fruit?",
    a1:{name: "Cow", status:"incorrect"},
    a2:{name: "Rope", status:"incorrect"},
    a3:{name: "Blue", status:"incorrect"},
    a4:{name: "Apple", status:"correct"},
}

var question3 = {
    q:"Which Is A Number?",
    a1:{name: "Dog", status:"incorrect"},
    a2:{name: "Grape", status:"incorrect"},
    a3:{name: "Three", status:"correct"},
    a4:{name: "Apple", status:"incorrect"},
}

var question4 = {
    q:"How Many Inches In A Foot?",
    a1:{name: "5", status:"incorrect"},
    a2:{name: "12", status:"correct"},
    a3:{name: "15", status:"incorrect"},
    a4:{name: "7", status:"incorrect"},
}

var question5 = {
    q:"Whitch Is An Animal?",
    a1:{name: "Wolf", status:"correct"},
    a2:{name: "Lake", status:"incorrect"},
    a3:{name: "House", status:"incorrect"},
    a4:{name: "Car", status:"incorrect"},
}

var questions =[question1,question2,question3,question4,question5]; 

var startTimer= function () {
    timeLeft= 30;
    timer = setInterval(function() {
        timeLeft--;
        var timeEl = document.querySelector("#timer");
        timeEl.textContent = timeLeft + " seconds left to finish.";
        if(timeLeft <= 0) {
            clearInterval(timer);
            displaySavedScores();
        }
    }, 1000);
}

var runQuestions = function(){
    questionHeader.textContent= questions[questionCount].q;
    answer1.textContent= questions[questionCount].a1.name;
    if(questions[questionCount].a1.status == "correct"){
        answer1.setAttribute("data-status", "correct");
    }
    answer2.textContent= questions[questionCount].a2.name;
    if(questions[questionCount].a2.status == "correct"){
        answer2.setAttribute("data-status", "correct");
    }
    answer3.textContent= questions[questionCount].a3.name;
    if(questions[questionCount].a3.status == "correct"){
        answer3.setAttribute("data-status", "correct");
    }
    answer4.textContent= questions[questionCount].a4.name;
    if(questions[questionCount].a4.status == "correct"){
        answer4.setAttribute("data-status", "correct")
    }
    questionCount++;
}

var checkAnswer= function(){
    if (answerStatus==="correct"){
        score= score+5;
        element.setAttribute("data-status", "incorrect");
    }else {
        timeLeft= timeLeft-5;
    }
    if (questionCount!== questions.length){
        runQuestions();
    }else {
        clearInterval(timer);
        displaySavedScores();
    }
}

function displaySavedScores(){

    quizStatus= "hiScore";
    quizScreen.setAttribute("class", "hidden") ;  
    hiScoreScreen.setAttribute("class", "hiScore");
    var setName = prompt("Please Enter Your Initials");
    var scoreName= score +"point/s Set By "+ setName;
    saved = JSON.parse(localStorage.getItem("hiScores"));
    if(saved== null){
        saved=[];
    }
    saved.push(scoreName);
    localStorage.setItem("hiScores", JSON.stringify(saved));
    leaderboard.innerHTML = "";
    if(saved!== null){
        for(var i = 0; i< saved.length; i++){
            var myscore= document.createElement("li");
            myscore.textContent=saved[i];
            leaderboard.appendChild(myscore);
        }
    }
}

var startUp =function(){
    questionCount = 0;
    score = 0;
    quizStatus= "quiz";
    startTimer();
    runQuestions();
}

var retake = function(){
    quizScreen.setAttribute("class", "box") ;   
    hiScoreScreen.setAttribute("class", "hidden");
    startUp();
}

var reset = function(){
    leaderboard.innerHTML = "";
}

quizEvent.addEventListener("click", function(event) {
    if(quizStatus=="start"){
        element = event.target;    
        if (element.matches("#start")){
            startBox.remove();
            startUp();
        }
    }if(quizStatus=="quiz"){
        element = event.target;
        if (element.matches(".answer")) {
             answerStatus = element.getAttribute("data-status");
             checkAnswer();
        }
    }if(quizStatus=="hiScore"){
        element = event.target;
        if (element.matches("#retake")) {
             retake();
        }if (element.matches("#reset")) {
            saved= [];
            localStorage.setItem("hiScores", JSON.stringify(saved));
            reset();
       }
    }
})

