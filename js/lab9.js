// buttom
const btnReset = document.querySelectorAll(".btnReset");
const btnRoll = document.querySelector(".roll");
const btnHold = document.querySelector(".hold");

// point
const point_player1 = document.querySelector(".point_player1");
const point_player2 = document.querySelector(".point_player2");
const point_current1 = document.querySelector(".point_current1");
const point_current2 = document.querySelector(".point_current2");

// player
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

// img roll
const img_roll = document.getElementById("img_roll");

// result
const result = document.querySelector(".result");
const result_lable = document.querySelector(".result_lable");
const result_point = document.querySelector(".result_point");
const btnOK = document.querySelector(".btnOK");

// point
var pointPlayer1 = 0;
var pointPlayer2 = 0;
var pointCurrent1 = 0;
var pointCurrent2 = 0;

// check player: player 1 = true, player 2 = false
var check = true;
var roll = 0;
function checkPlayer() {
  if (check) {
    check = false;
    player1.style.backgroundColor = "rgb(169, 90, 132)";
    player2.style.backgroundColor = "rgb(248, 181, 239)";
    if (roll != 1) {
      pointPlayer1 += pointCurrent1;
      point_player1.textContent = pointPlayer1;
    }
    if (pointPlayer1 >= 100) {
      result.classList.remove("hidden");
      result_lable.textContent = "🏆 PLAYER 1 WIN 🏆";
      result_point.textContent = pointPlayer1;
    } else {
      point_current1.textContent = "0";
      pointCurrent1 = 0;
    }

    console.log("roll: ", roll);
  } else {
    check = true;
    player1.style.backgroundColor = "rgb(248, 181, 239)";
    player2.style.backgroundColor = "rgb(169, 90, 132)";
    if (roll != 1) {
      pointPlayer2 += pointCurrent2;
      point_player2.textContent = pointPlayer2;
    }
    if (pointPlayer2 >= 100) {
      result.classList.remove("hidden");
      result_lable.textContent = "🏆 PLAYER 2 WIN 🏆";
      result_point.textContent = pointPlayer2;
    } else {
      point_current2.textContent = "0";
      pointCurrent2 = 0;
    }
  }
}

btnRoll.addEventListener("click", function () {
  roll = Math.floor(Math.random() * 6) + 1;
  img_roll.style.backgroundImage = `url(img/${roll}.png)`;
  img_roll.classList.remove("hidden");
  console.log(roll);

  if (check) {
    pointCurrent1 += roll;
    point_current1.textContent = pointCurrent1;
  } else {
    pointCurrent2 += roll;
    point_current2.textContent = pointCurrent2;
  }
  console.log("hello");
  if (roll == 1) {
    checkPlayer();
  }
});

btnHold.addEventListener("click", checkPlayer);

for (let i = 0; i < btnReset.length; i++)
  btnReset[i].addEventListener("click", function () {
    player1.style.backgroundColor = "rgb(248, 181, 239)";
    player2.style.backgroundColor = "rgb(169, 90, 132)";
    result.classList.add("hidden");
    img_roll.classList.add("hidden");

    point_current2.textContent = "0";
    point_current1.textContent = "0";
    point_player1.textContent = "0";
    point_player2.textContent = "0";

    pointPlayer1 = 0;
    pointPlayer2 = 0;
    pointCurrent1 = 0;
    pointCurrent2 = 0;
    check = true;
  });

btnOK.addEventListener("click", function () {
  result.classList.add("hidden");
});
