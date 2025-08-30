let boxes = document.querySelectorAll(".button");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector("#newGame");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-Container");
let turnO = true;
const winPoints = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () =>{
    trueO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((button) =>{
    button.addEventListener("click",()=>{
        if(turnO){
        button.innerText = "O";
        turnO = false;
    }
    else{
        button.innerText = "X"
        turnO = true;
    }
    button.disabled = true;
    checkWinner();
    });
} );

const disableBoxes = () => {
    for(let button of boxes){
    button.disabled = true;
    }
};
const enableBoxes = () => {
    for(let button of boxes){
    button.disabled = false;
    button.innerText = "";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = ()=> {
    for (let pattern of winPoints){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner ",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
