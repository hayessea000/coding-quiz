var quizEvent = document.querySelector("article");
var qHead = document.querySelector("#question");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");

var question1 = {q:"q1", answerLine1:"1", answerLine2:"2",answerLine3:"3", answerLine4:"4"}
var question2 = {q:"q2", answerLine1:"yes", answerLine2:"2",answerLine3:"3", answerLine4:"4"}
var question3 = {q:"q3", answerLine1:"1", answerLine2:"2",answerLine3:"3", answerLine4:"q4"}
var qs =[question1,question2,question3] 
var questionCount = 0
var runQuestions = function(){
    
    qHead.textContent= qs[questionCount].q;
    a1.textContent= qs[questionCount].answerLine1;
    a2.textContent= qs[questionCount].answerLine2;
    a3.textContent= qs[questionCount].answerLine3;
    a4.textContent= qs[questionCount].answerLine4;
    questionCount++
    console.log(questionCount)
}







quizEvent.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches(".answer")) {
        var status = element.getAttribute("data-status")
        if (status==="correct"){
            console.log("cor")
        }else {
            console.log("in")
        }
        runQuestions()
    }
})