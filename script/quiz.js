const quizForm = document.querySelector(".quiz-form");
const outputDiv = document.querySelector(".output");
const submitButton = document.querySelector(".submit-button");

const correctAnswers = ["Yes", "3", "180", "True", "True"];

function checkResponse() {
    const formResults = new FormData(quizForm);

    let score = 0;
    let index = 0;
    for (let answer of formResults.values()) {
        console.log(answer, correctAnswers[index]);
        if (answer === correctAnswers[index]) {
            score = score + 1
        }
        index = index + 1;
    }

    outputDiv.innerText = `Your Score is ${score}`;


}

submitButton.addEventListener("click", checkResponse);
