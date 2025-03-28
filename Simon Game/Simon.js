let gameSq = [];
let userSq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");



//When user press any key to start game
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game started");
        started = true;
        levelUp();
    }

});

//Flash function button flash
function buttonFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250)
}

//User flash button function
function userbuttonFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250)
}

//Level function 
function levelUp() {
    userSq=[];
    level++;
    h2.innerText = `Level ${level}`;
    //Choose random button
    let randIndx = Math.floor(Math.random() * 3);
    let randColors = btns[randIndx];
    let randbtn = document.querySelector(`.${randColors}`);
gameSq.push(randColors);
console.log(gameSq);
    buttonFlash(randbtn);
}

//Check userSeq is equal to game Seq
function checkSeq(index){
    
    if(userSq[index]===gameSq[index]){
      if(userSq.length==gameSq.length){
       setTimeout(levelUp,1000) ;
      }
    }else{
        h2.innerHTML = `Game Over! <b>Your Score is ${level}</b> <br>Press any key to start Game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
 document.querySelector("body").style.backgroundColor="white";
        },150)
        resetGame();
    }
}

//When user click button
function btnPress() {
    let btn = this;
    userbuttonFlash(btn);

    let userColor=btn.getAttribute("id");
   
    userSq.push(userColor);
    checkSeq(userSq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

//Reset game
function resetGame(){
    started=false;
    gameSq=[];
    userSq=[];
    level=0;
}