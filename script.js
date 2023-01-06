const announcements = document.querySelector("#announcements");
const cells = document.querySelectorAll("#gameboard > div");
const reset = document.querySelector("#reset-button");

function game() {
  this.gamestate = Array(9);
  this.currentPlayer = "X";
}

let currentGame = new game();
console.log(currentGame.gamestate);
console.log(currentGame.currentPlayer);

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function (e) {
    onClick(e, i, currentGame);
  });
}

function onClick(e, cell_number, obj) {
  if (e.target.textContent) {
    announcements.textContent = "That position has already been filled!";
    return;
  }

  e.target.textContent = obj.currentPlayer;
  obj.gamestate[cell_number] = obj.currentPlayer;

  checkGameState(obj);

  if (obj.currentPlayer === "X") {
    obj.currentPlayer = "O";
  } else {
    obj.currentPlayer = "X";
  }
  console.log(obj.currentPlayer);
}

function checkGameState(obj) {
  /* Checking if the game has been won */
  if (
    (obj.gamestate[0] === obj.currentPlayer &&
      obj.gamestate[1] === obj.currentPlayer &&
      obj.gamestate[2] === obj.currentPlayer) ||
    (obj.gamestate[3] === obj.currentPlayer &&
      obj.gamestate[4] === obj.currentPlayer &&
      obj.gamestate[5] === obj.currentPlayer) ||
    (obj.gamestate[6] === obj.currentPlayer &&
      obj.gamestate[7] === obj.currentPlayer &&
      obj.gamestate[8] === obj.currentPlayer) ||
    (obj.gamestate[0] === obj.currentPlayer &&
      obj.gamestate[3] === obj.currentPlayer &&
      obj.gamestate[6] === obj.currentPlayer) ||
    (obj.gamestate[1] === obj.currentPlayer &&
      obj.gamestate[4] === obj.currentPlayer &&
      obj.gamestate[7] === obj.currentPlayer) ||
    (obj.gamestate[2] === obj.currentPlayer &&
      obj.gamestate[5] === obj.currentPlayer &&
      obj.gamestate[8] === obj.currentPlayer) ||
    (obj.gamestate[0] === obj.currentPlayer &&
      obj.gamestate[4] === obj.currentPlayer &&
      obj.gamestate[8] === obj.currentPlayer) ||
    (obj.gamestate[2] === obj.currentPlayer &&
      obj.gamestate[4] === obj.currentPlayer &&
      obj.gamestate[6] == obj.currentPlayer)
  ) {
    console.log(obj.gamestate);
    announcements.textContent = `Brilliant! Player ${obj.currentPlayer} has won!`;
  } else if (!obj.gamestate.includes(undefined)) {
    announcements.textContent = `Draw!`;
  }
}

reset.addEventListener("click", function () {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
  currentGame.gamestate = Array(9);
  currentGame.currentPlayer = "X";
  announcements.textContent = "Start game by clicking a square!";
});
