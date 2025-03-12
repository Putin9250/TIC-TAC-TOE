console.log("Putin");
let music = new Audio("music.mp3");
let gameOverMusic = new Audio("gameover.mp3");
let ting = new Audio("ting.mp3");
let turn = "X";
let isGameOver = false;

// music.play();
music.loop=true;
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

//Game Over Function
const gameOverfun = () => {};
//Function to check WIN
const checkWin = () => {
  let wins = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  for (let pattern of wins) {
    pattern1 = boxes[pattern[0]].innerText;
    pattern2 = boxes[pattern[1]].innerText;
    pattern3 = boxes[pattern[2]].innerText;

    if (pattern1 !== "" && pattern2 !== "" && pattern3 !== "") {
      if (pattern1 === pattern2 && pattern2 == pattern3) {
        document.querySelector(".info").innerText = "Winner " + pattern1;
        isGameOver = true;
        document.querySelector(".imgBox img").style.width = "100px";
    
      }
    }
  }
};

//Game LOGIC
boxes = document.getElementsByClassName("box");
let textbox = document.querySelector(".textbox");

for (const box of boxes) {
  box.addEventListener("click", () => {
    if (box.innerText === "" && !isGameOver) {
      box.innerText = turn;
      turn = changeTurn();
      ting.play();
      document.querySelector(".info").innerText = "Turn for " + turn;
      checkWin();
    }
  });
}
reset=document.querySelector("#reset")
//Reset Button
reset.addEventListener("click", () => {
    for(const box of boxes){
        box.innerText=""
    }
    document.querySelector(".imgBox img").style.width = "0px";
    turn = "X";
    document.querySelector(".info").innerText = "Turn for " + turn;
    isGameOver=false;
})

let musicBtn=document.querySelector(".stopMusic");
let musicplay=false;
musicBtn.addEventListener("click",() => {
  if(musicplay){
    music.pause();
    musicplay=false;
    musicBtn.innerText = "🔇";
  }
  else{
    music.loop=true;
    music.play();
    musicBtn.innerText = "🎵";
    musicplay=true;
  }

})