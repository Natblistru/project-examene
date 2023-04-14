let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let gameDiv = document.querySelector(".game");
let endDiv = document.querySelector(".end");
let restartBtn = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startDiv = document.querySelector(".start");
let startBtn = document.querySelector(".start button");
let questionCount;
let scoreCount = 0;
let seconds = 11;
let timer;

let quizArray = [
   {
    question: "Care este capitala Franței?",
    answers: ["Londra", "Paris", "Madrid", "Berlin"],
    correctAnswer: "Paris"
  }, 
  {
    question: "Cine a scris romanul 'Mândrie și Prejudecată'?",
    answers: ["Charlotte Bronte", "Emily Bronte", "Jane Austen", "Virginia Woolf"],
    correctAnswer: "Jane Austen"
  },
   {
    question: "Cine a inventat becul electric?",
    answers: ["Thomas Edison", "Albert Einstein", "Nikola Tesla", "Benjamin Franklin"],
    correctAnswer: "Thomas Edison"
  },
  {
    question: "Care este cel mai înalt munte din lume?",
    answers: ["Kilimanjaro", "Mont Blanc", "Everest", "Aconcagua"],
    correctAnswer: "Everest"
  },
  {
    question: "Câte planete există în sistemul solar?",
    answers: ["7", "8", "9", "10"],
    correctAnswer: "8"
  }, 
  {
    question: "Cine a scris 'Hamlet'?",
    answers: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
    correctAnswer: "William Shakespeare"
  },
   {
    question: "Care este cel mai lung râu din lume?",
    answers: ["Nilul", "Amazonul", "Yangtze", "Mississippi"],
    correctAnswer: "Nilul"
  },
  {
    question: "Care este cel mai mic continent?",
    answers: ["Africa", "Europa", "Asia", "Australia"],
    correctAnswer: "Australia"
  },
  {
    question: "Cine a pictat 'Noaptea stelată'?",
    answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: "Vincent van Gogh"
  },
  {
    question: "Care este capitala Canadei?",
    answers: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    correctAnswer: "Ottawa"
  } 
];
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
