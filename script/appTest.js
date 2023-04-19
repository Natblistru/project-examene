let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let gameDiv = document.querySelector(".game");
let titluHTML = document.querySelector(".game h2");
let endDiv = document.querySelector(".end");
let restartBtn = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startDiv = document.querySelector(".start");
let startBtn = document.querySelector(".start button");
let questionCount;
let scoreCount = 0;
let seconds = 11;
let timer;
let quizArray;
let curentQuiz;
let lectureNumber = parseInt(new URLSearchParams(window.location.search).get('lecture'));
console.log(lectureNumber); 

async function getArray() {
  try { 
    const response = await fetch(`teste.json`);
     if (!response.ok) { 
        throw new Error(`HTTP error! status: ${response.status}`); } 
        const data = await response.json();
        console.log(data);
        const fileName = window.location.pathname.split('/').pop();
        const filteredData = data.filter(obj => obj.lesson == lectureNumber&&obj.fileCommon == fileName);
        quizArray = filteredData[0].quizContent;
        curentQuiz = filteredData[0];
      }
      catch (error) { 
        console.error('Error:', error); 
    }
}
getArray();
startBtn.addEventListener("click", () => {
    gameDiv.classList.remove("hide");
    startDiv.classList.add("hide");    
    initial();
});

restartBtn.addEventListener("click", () => {
  gameDiv.classList.remove("hide");
  endDiv.classList.add("hide");  
  initial();
});

nextBtn.addEventListener("click", displayNext);

function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  clearInterval(timer);
  quizCreator();
  quizDisplay(questionCount);
}

function displayNext() {
  questionCount++;
  if (questionCount == quizArray.length) {
    endDiv.classList.remove("hide");      
    gameDiv.classList.add("hide");
    userScore.innerHTML = "Scorul Dvs este " + scoreCount + " din " + questionCount;
  } else {
    clearInterval(timer);
    quizDisplay(questionCount);
  }
}

function quizDisplay (questionCount) {
  titluHTML.innerHTML = curentQuiz.lessonTitle;
  countOfQuestion.innerHTML = questionCount + 1 + " din " + quizArray.length + " întrebări";

  let quizCards = document.querySelectorAll(".container-mid");
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  quizCards[questionCount].classList.remove("hide");

  seconds = 10;
  timeLeft.innerHTML = `${seconds}s`;
  timer = setInterval(() => {
    seconds--;
    timeLeft.innerHTML = `${seconds}s`;
    if (seconds == 0) {
      clearInterval(timer);
      displayNext();
    }
  }, 1000);
};

function quizCreator() {
    quizArray.sort(() => Math.random() - 0.5);
    for (let i of quizArray) {
      i.answers.sort(() => Math.random() - 0.5);
      titluHTML.innerHTML = curentQuiz.lessonTitle;
      countOfQuestion.innerHTML = 1 + " din " + quizArray.length + " întrebări";
  
      quizContainer.innerHTML += `
      <div class="container-mid hide">
          <p class="question">${i.question}</p>
          <button class="answer">${i.answers[0]}</button>
          <button class="answer">${i.answers[1]}</button>
          <button class="answer">${i.answers[2]}</button>
          <button class="answer">${i.answers[3]}</button>
      </div>
      `;
    }
    gameDiv.addEventListener("click", checker) 
}

function checker(event) {
  let userOption = event.target;
  if (userOption.classList.contains('answer')){
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let answers = question.querySelectorAll(".answer");
    if (userOption.textContent === quizArray[questionCount].correctAnswer) {
      userOption.classList.add("correct");
      scoreCount++;
    } else {
      userOption.classList.add("incorrect");
      answers.forEach(element => {
        if (element.textContent == quizArray[questionCount].correctAnswer) {
          element.classList.add("correct");
        }
      });
    }
    clearInterval(timer);
    answers.forEach((element) => {
      element.disabled = true;
    });
  }
}
