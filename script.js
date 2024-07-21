let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "green", "blue"];
let started = false;
let level = 0;
let highestLevel = 0;
let h2 = document.querySelector("h2");
let highestLevelH2 = document.getElementById("highest-level");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game has Started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = Level ${level};
  let randIdx = Math.floor(Math.random() * 4); // Updated to include all 4 colors
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(.${randColor});
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if (level > highestLevel) {
      highestLevel = level;
      highestLevelH2.innerText = Highest Level: ${highestLevel};
    }
    h2.innerHTML = Game Over!! Your Score was <b>${level}</b>. <br> Press any key to start again;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  console.log(this);
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
