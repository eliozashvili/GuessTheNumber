'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
const secretNumber = function (number) {
  document.querySelector(`.number`).textContent = number;
};
const gameScore = function (score) {
  document.querySelector(`.score`).textContent = score;
};
const bodyStyle = function (style) {
  document.querySelector(`body`).style.backgroundColor = style;
};
const widthStyle = function (width) {
  document.querySelector(`.number`).style.width = width;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (guess === number) {
    // If you win the game
    displayMessage(`🔥 Correct Number!`);
    secretNumber(number);

    bodyStyle(`#60b347`);
    widthStyle(`30rem`);

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  } else if (!guess) {
    // If you will not enter the number
    displayMessage(`⛔️ No Number.`);
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? `It's too high.` : `It's too low.`);
      gameScore(score);
      --score;
    } else {
      displayMessage(`You lost.`);
      gameScore(0);
      bodyStyle(`#DC143C`);
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score += 20 - score;
  gameScore(score);

  number = Math.trunc(Math.random() * 20) + 1;
  secretNumber(number);

  displayMessage(`Start guessing...`);
  secretNumber(`?`);
  document.querySelector(`.guess`).value = ``;

  bodyStyle(`#222`);
  widthStyle(`15rem`);
});

/* Reference of NOT D.R.Y code :)
} else if (guess > number) { // If Guess number is higher than Secret Number
        if (score > 1) {
            document.querySelector (`.message`).textContent = `It's too high.`;
            score--;
            document.querySelector (`.score`).textContent = score;
        } else {
            document.querySelector (`.message`).textContent = `You lost.`;
            document.querySelector (`.score`).textContent = 0;
            document.querySelector (`body`).style.backgroundColor = `#DC143C`;
        }
    } else if (guess < number) { // If Guess number is lower than Secret Number
        if (score > 1) {
            document.querySelector (`.message`).textContent = `It's too low.`;
            score--;
            document.querySelector (`.score`).textContent = score;
        } else {
            document.querySelector (`.message`).textContent = `You lost.`;
            document.querySelector (`.score`).textContent = 0;
            document.querySelector (`body`).style.backgroundColor = `#DC143C`;
        }
    }
*/
