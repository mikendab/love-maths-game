// Wait until the HTML is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.getElementsByTagName("button");

    // Add event listeners for all buttons
    for (let button of buttons) {
        button.addEventListener("click", function () {
            const gameType = this.getAttribute("data-type");

            if (gameType === "submit") {
                checkAnswer();
            } else {
                runGame(gameType);
            }
        });
    }

  // Listen for Enter key in the answer box
    document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });

    // Start the game with addition by default
    runGame("addition");
});

// Main function to run the game
function runGame(gameType) {
    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    const num1 = Math.floor(Math.random() * 25) + 1;
    const num2 = Math.floor(Math.random() * 25) + 1;
  
    if (gameType === "addition") {
        displayQuestion(num1, num2, "+");
    } else if (gameType === "subtract") {
        displayQuestion(num1, num2, "-");
    } else if (gameType === "multiply") {
        displayQuestion(num1, num2, "x");
    } else if (gameType === "division") {
        displayQuestion(num1, num2, "/");
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

// Check the user's answer
function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer-box").value);
    const num1 = parseInt(document.getElementById("operand1").textContent);
    const num2 = parseInt(document.getElementById("operand2").textContent);
    const operator = document.getElementById("operator").textContent;

   let correctAnswer;
    let gameType;

    switch (operator) {
        case "+":
            correctAnswer = num1 + num2;
            gameType = "addition";
            break;
        case "-":
            correctAnswer = num1 - num2;
            gameType = "subtract";
            break;
        case "x":
            correctAnswer = num1 * num2;
            gameType = "multiply";
            break;
        case "/":
            correctAnswer = Math.floor(num1 / num2);
            gameType = "division";
            break;
    }
 
  if (userAnswer === correctAnswer) {
        alert("✅ Correct! Well done!");
        incrementScore();
    } else {
        alert(`❌ Wrong! The correct answer was ${correctAnswer}.`);
        incrementWrongAnswer();
    }

    runGame(gameType);
}

// Display the question on screen
function displayQuestion(num1, num2, operator) {
    document.getElementById("operand1").textContent = num1;
    document.getElementById("operand2").textContent = num2;
    document.getElementById("operator").textContent = operator;
}

// Increase correct score
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").textContent);
    document.getElementById("score").textContent = ++oldScore;
}

// Increase incorrect score
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").textContent);
    document.getElementById("incorrect").textContent = ++oldScore;
}
