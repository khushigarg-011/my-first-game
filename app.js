let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let messege = document.querySelector("#messege")

let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
        box.innerText = "O"
        turnO = false;
    }   else {
        box.innerText = "X"
        turnO = true;
    }
    box.disabled = true;
    setTimeout(() => {
        checkWinner();
    }, 2000);
});
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

const showWinner = (winner) => {
    messege.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(pattern of winPatterns) {
       let pos1Val = boxes[pattern[0]].innerText;
       let pos2Val = boxes[pattern[1]].innerText;
       let pos3Val = boxes[pattern[2]].innerText;

       if(pos1Val != "" && pos2Val != "" && pos3Val != "" ) {
        if(pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
        }
       }
    }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

   
