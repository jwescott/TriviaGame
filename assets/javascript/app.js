const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
let rightAnswer = 0;
let wrongAnswer = 0;
let emptyAnswer = 0;


//generate dynamic questions and answers from myQuestions array
//if user clicks on correct answer rightAnswer goes up by 1
//if user clicks on wrong answer wrongAnswer goes up by 1
//if user leaves question blank emptyAnswer goes up by 1

//when user click submit button, game ends
//display rightAnswer and wrongAnswer and emptyAnswer
//after game is over just show scoreboard


// here is the quiz
const myQuestions = [{
        question: "What team features a lightning bold on its helmet?",
        answers: {
            a: "New England Patriots",
            b: "Baltimore Ravens",
            c: "Seattle Seahawks",
            d: "Los Angeles Chargers"
        },
        correctAnswer: "Los Angeles Chargers"
    },
    {
        question: "Which of the following is not a position in football?",
        answers: {
            a: "Fullback",
            b: "Quarterback",
            c: "Halfback",
            d: "Doubleback"
        },
        correctAnswer: "Doubleback"
    },
    {
        question: "What team's color scheme is purple and gold?",
        answers: {
            a: "Green Bay Packers",
            b: "Baltimore Ravens",
            c: "There is no team with this color scheme",
            d: "Minnesota Vikings"
        },
        correctAnswer: "Green Bay Packers"
    },
    {
        question: "How many yards are on a football field?",
        answers: {
            a: "100 Yards",
            b: "110 Yards",
            c: "40 Yards",
            d: "200 Yards"
        },
        correctAnswer: "100 Yards"
    },
    
];

function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    buildQuiz();
    startTimer(fiveMinutes, display);
};

{
    /* <input type="radio" name="What team features a lightning bolt on its helmet?"
    value="new england patriots">New England Patriots<br>
    <input type="radio" name="What team features a lightning bolt on its helmet?"
    value="baltimore ravens">Baltimore Ravens<br>
    <input type="radio" name="What team features a lightning bolt on its helmet?"
    value="seattle seahawks">Seattle Seahawks<br>
    <input type="radio" name="What team features a lightning bolt on its helmet?"
    value="los angeles chargers">Los Angeles Chargers<br> */
}


function buildQuiz() {
    for (let index = 0; index < myQuestions.length; index++) {

        let question = myQuestions[index].question;
        let br = document.createElement("br");

        let p = document.createElement("p");

        //$("p").html("<br>")
        p.innerHTML = question +"<br>";

       
       


        var lbl1 = document.createElement("label");
        lbl1.innerHTML = myQuestions[index].answers.a;
        //create dynamic radio button
        let inputA = document.createElement("input");
        inputA.setAttribute("type", "radio");
        inputA.setAttribute("name", "answers");
        inputA.setAttribute("data-correctAnswer",  myQuestions[index].correctAnswer);
        inputA.setAttribute("value", myQuestions[index].answers.a)
        

        inputA.onclick = function() {
 

            if(this.value=== inputA.getAttribute("data-correctAnswer")){
                alert("correct")
            }
           else{
            alert("incorrect")
           }
        } 
        p.append(inputA)
      
        p.append(lbl1)


        var lbl2 = document.createElement("label");
        lbl2.innerHTML = myQuestions[index].answers.b;
        //create dynamic radio button
        let inputB = document.createElement("input");

        inputB.setAttribute("value", myQuestions[index].answers.b)
        inputB.setAttribute("data-correctAnswer",  myQuestions[index].correctAnswer);
        inputB.setAttribute("name", "answers");
        inputB.setAttribute("type", "radio");

        inputB.onclick = function() {
         
            if(this.value=== inputB.getAttribute("data-correctAnswer")){
                alert("correct")
            }
           else{
            alert("incorrect")
           }
        } 
        p.append(inputB)
        p.append(lbl2)


        var lbl3 = document.createElement("label");
        lbl3.innerHTML = myQuestions[index].answers.c;
        //create dynamic radio button
        let inputC = document.createElement("input");

        inputC.setAttribute("value", myQuestions[index].answers.c)
        inputC.setAttribute("data-correctAnswer",  myQuestions[index].correctAnswer);
        inputC.setAttribute("name", "answers");
        inputC.setAttribute("type", "radio");

        inputC.onclick = function() {
           
            if(this.value=== inputC.getAttribute("data-correctAnswer")){
                alert("correct")
            }
           else{
            alert("incorrect")
           }
        } 
        p.append(inputC)
        p.append(lbl3)

        var lbl4 = document.createElement("label");
        lbl4.innerHTML = myQuestions[index].answers.d;
        //create dynamic radio button
        let inputD = document.createElement("input");

        inputD.setAttribute("value", myQuestions[index].answers.d)
        inputD.setAttribute("data-correctAnswer",  myQuestions[index].correctAnswer);
        inputD.setAttribute("name", "answers");
        inputD.setAttribute("type", "radio");

        inputD.onclick = function() {
          
            if(this.value=== inputD.getAttribute("data-correctAnswer")){
                alert("correct")
            }
           else{
            alert("incorrect")
           }
        } 
        p.append(inputD)
 
        p.append(lbl4)



        p.append(br)
        document.querySelector('#quiz').append(p);
    }
}

function showResults() {}