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
