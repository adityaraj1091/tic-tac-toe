let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn=document.querySelector(".turn")

let turn0=true;


const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const checkTurn=()=>{
    if(turn0){
        turn.innerText="next turn: X";
    }else{
        turn.innerText="next turn: O";
    }
}
const newGame=()=>{
    turn0=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        msgContainer.classList.add("hide");
        turn.innerText="next turn: O";
    }
}

const resetGame=()=>{
    turn0=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        turn.innerText="next turn: O";
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        checkTurn();
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    for(let box of boxes){
        box.disabled=true;
    }
}

const checkWinner = ()=>{
    for(let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
            }
        }
    }
}

reset.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",newGame);
