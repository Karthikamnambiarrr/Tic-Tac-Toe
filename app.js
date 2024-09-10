let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
let count=0;
const winPattern = [ [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];


const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        console.log("box was clicked")
        if(turn0){
            box.innerText="O";
            box.style.color="red";
            turn0=false;
        }
        else{
            box.innerText="X";
            box.style.color="blue";
            turn0=true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if(!isWinner && count==9){
            gameDraw();
        }
    } 
)
})

const gameDraw=()=>{
    msg.innerText="Game is a Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPattern){
        
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val==pos2Val&&pos2Val==pos3Val){
                showWinner(pos1Val);
            }
        }
    }

}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
