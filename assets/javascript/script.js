var quizEvent = document.querySelector("article");
var qHead = document.querySelector("#question");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");

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
var runQuestions = function(){
    
    qHead.textContent= qs[questionCount].q;
    a1.textContent= qs[questionCount].answerLine1.name;
    a2.textContent= qs[questionCount].answerLine2.name;
    a3.textContent= qs[questionCount].answerLine3.name;
    a4.textContent= qs[questionCount].answerLine4.name;
    questionCount++
    console.log(questionCount)
}







quizEvent.addEventListener("click", function(event) {
    element = event.target;
    if (element.matches(".answer")) {
        var status = element.getAttribute("data-status")
        if (status==="correct"){
            console.log("cor")
        }else {
            console.log("in")
        }
        if (questionCount== qs.length){
            console.log("done")
        }else {
            runQuestions()
        }
    }
})