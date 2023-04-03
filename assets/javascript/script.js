var quizEvent = document.querySelector("article");
var qHead = document.querySelector("#question");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");

var question1 = {q:"q1", answerLine1:"1", answerLine2:"2",answerLine3:"3", answerLine4:"4"}
var question2 = {q:"q2", answerLine1:"1", answerLine2:"2",answerLine3:"3", answerLine4:"4"}
var question3 = {q:"q3", answerLine1:"1", answerLine2:"2",answerLine3:"3", answerLine4:"4"}
var qs =[question1,question2,question3] 

var nextQ = function(){
    qHead.textContent= question1.q;
    a1.textContent= question1.answerLine1;
    a2.textContent= question1.answerLine2;
    a3.textContent= question1.answerLine3;
    a4.textContent= question1.answerLine4;
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
        // next question
        nextQ()
    }
})