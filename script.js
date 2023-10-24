console.log("he")
const audioTurn = new Audio("ting.mp3")
const gameOver = new Audio("gameover.mp3")
let turn = "X"
let infoText = document.querySelector(".info").innerText
let isGameOver = false;
let reset = document.querySelector(".reset")

// change turn from X to O and O to X
let changeTurn = ()=>{
    return turn === "X"? "O" : "X"
}


// check for win winning logic
let boxText = document.querySelectorAll(".boxText")
let checkWin = ()=>{
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ]

    wins.forEach(e =>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")){
            document.querySelector(".info").innerText =  `${boxText[e[0]].innerText} Win`
            gameOver.play()
            isGameOver = true;
            e.forEach(element =>{
                boxText[element].parentElement.style.backgroundColor = 'red'
            })
            document.getElementById("imageImg").style.width = "200px"
        }
    })
}

// Game logic

let boxes = document.querySelectorAll(".box")
boxes.forEach(element => {
    let boxText = element.querySelector(".boxText")
    element.addEventListener("click", ()=>{
        if(boxText.innerText == ""){
            boxText.innerText = turn
            turn = changeTurn()
            audioTurn.play()
            checkWin()
            if(!isGameOver){
                document.querySelector(".info").innerText = `Turn of ${turn}`
            }
        }
    })
})

reset.addEventListener("click", ()=>{
    
    let boxtext = document.querySelectorAll(".boxText")
    Array.from(boxtext).forEach(element=>{
    element.innerText = ''
    element.parentElement.style.backgroundColor ="white"
    turn = "X"
    document.querySelector(".info").innerText = `Turn of ${turn}`
    document.getElementById("imageImg").style.width = "0px"
    isGameOver = false
  })
})


