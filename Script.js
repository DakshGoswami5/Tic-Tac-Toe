let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector(".Reset");
let NewGame = document.getElementById("NewGame");
let Winner = document.querySelector(".Winner");
let win = document.getElementById("win");

let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    trun0 = true;
    enableBoxes();
    Winner.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {  // doubt in this loop only in loop
    for(pattern of winPatterns){
        let posi1 = boxes[pattern[0]].innerText;
        let posi2 = boxes[pattern[1]].innerText;
        let posi3 = boxes[pattern[2]].innerText;
        
        if(posi1 != "" && posi2 != "" && posi3 !=""){
            if(posi1 === posi2 && posi2 === posi3){
                console.log("Winner",posi1);
                showWinner(posi1);
            }
        }

    }
}
const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (Winner) => {{
    win.innerText = "Congratulation winner is", Winner;
    Winner.classList.remove("hide");
    disableBoxes();

}}

resetbutton.addEventListener("click", resetGame);
NewGame.addEventListener("click", resetGame);
