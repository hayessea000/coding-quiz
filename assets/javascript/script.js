var quizEvent = document.querySelector("article");


var question1 = {q:"q1", q1:"1", q2:"2",q3:"3", q4:"4"}
var question2 = {q:"q2", q1:"1", q2:"2",q3:"3", q4:"4"}
var question3 = {q:"q3", q1:"1", q2:"2",q3:"3", q4:"4"}
var qs =[question1,question2,question3] 

quizEvent.addEventListener("click", function(event) {
    console.log("box")
    var element = event.target;
    if (element.matches(".answer")) {
        console.log("yes")
        if (element.matches("#correct")){
            console.log("cor")
        }
    }
})