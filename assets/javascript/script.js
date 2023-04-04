var quizEvent = document.querySelector("article");
var startBox = document.querySelector("#start");
var qHead = document.querySelector("#question");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");
var quizStatus= "start"
var score= 0
var question1 = {
    q:"which is a color?",
    answerLine1:{name: "blue", status:"correct"},
    answerLine2:{name: "a", status:"incorrect"},
    answerLine3:{name: "3", status:"incorrect"},
    answerLine4:{name: "apple", status:"incorrect"},
}

var question2 = {
    q:"which is a fruit?",
    answerLine1:{name: "blue", status:"incorrect"},
    answerLine2:{name: "a", status:"incorrect"},
    answerLine3:{name: "3", status:"incorrect"},
    answerLine4:{name: "apple", status:"correct"},
}

var question3 = {
    q:"which is a letter?",
     answerLine1:{name: "blue", status:"incorrect"},
      answerLine2:{name: "a", status:"correct"},
      answerLine3:{name: "3", status:"incorrect"},
       answerLine4:{name: "apple", status:"incorrect"},
}

var qs =[question1,question2,question3] 
var questionCount = 0
var element
var timer
var runQuestions = function(){
    
    qHead.textContent= qs[questionCount].q;
    a1.textContent= qs[questionCount].answerLine1.name;
    if(qs[questionCount].answerLine1.status == "correct"){
        a1.setAttribute("data-status", "correct")
    }
    a2.textContent= qs[questionCount].answerLine2.name;
    if(qs[questionCount].answerLine2.status == "correct"){
        a2.setAttribute("data-status", "correct")
    }
    a3.textContent= qs[questionCount].answerLine3.name;
    if(qs[questionCount].answerLine3.status == "correct"){
        a3.setAttribute("data-status", "correct")
    }
    a4.textContent= qs[questionCount].answerLine4.name;
    if(qs[questionCount].answerLine4.status == "correct"){
        a4.setAttribute("data-status", "correct")
    }
    questionCount++
    console.log(questionCount)
}

var startTimer= function () {
    var timeLeft= 15;
    timer = setInterval(function() {
        timeLeft--;
        var time = document.querySelector("#timer");
        time.textContent = timeLeft + " seconds left to finish.";
        
        if(timeLeft === 0) {
            clearInterval(timer);
            hiScore()
        }
  
    }, 1000);
}

var hiScore= function(){
    qHead.textContent= "";
    a1.textContent= "";
    a2.textContent= "";
    a3.textContent= "";
    a4.textContent= "";
    console.log("final")
    var setName = prompt("Please enter your name");
    var newScore = document.createElement("li");
    newScore.textContent = score +" "+ setName;
    var leaderboard = document.querySelector("#hiScore");
    leaderboard.appendChild(newScore);
}



quizEvent.addEventListener("click", function(event) {
    element = event.target;
    if(quizStatus=="quiz"){
        if (element.matches(".answer")) {
            var status = element.getAttribute("data-status")
            if (status==="correct"){
                console.log("cor")
                score++
                element.setAttribute("data-status", "incorrect")
            }else {
                console.log("in")
            }
            if (questionCount== qs.length){
                console.log("done");
                console.log("score:"+score);
                clearInterval(timer);
                hiScore()
            }else {
                runQuestions()
            }
        }
    }if(quizStatus=="start"){    
        if (element.matches("#start")){
        startBox.remove()
        quizStatus= "quiz"
        startTimer()
        runQuestions()
        }
    }
})