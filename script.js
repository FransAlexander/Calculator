const btnZero = document.querySelector(".btn_row5--0")
const btnOne = document.querySelector(".btn_row4--1")
const btnTwo = document.querySelector(".btn_row4--2")
const btnThree = document.querySelector(".btn_row4--3")
const btnFour = document.querySelector(".btn_row3--4")
const btnFive = document.querySelector(".btn_row3--5")
const btnSix = document.querySelector(".btn_row3--6")
const btnSeven = document.querySelector(".btn_row2--7")
const btnEight = document.querySelector(".btn_row2--8")
const btnNine = document.querySelector(".btn_row2--9")

const btnDivison = document.querySelector(".btn_row1--divison")
const btnMultiply = document.querySelector(".btn_row2--multiply")
const btnAddition = document.querySelector(".btn_row3--addition")
const btnSubtract = document.querySelector(".btn_row4--subtract")

const btnBackspace = document.querySelector(".btn_row1--backspace")
const btnClear = document.querySelector(".btn_row1--clear")
const btnEquals = document.querySelector(".btn_row5--equals")
const btnDot = document.querySelector(".btn_row5--dot")

//When btn clicked -> store value of btn in new VAR
function getValuefromNumBtn(btn){
  return btn.value
}
function numberEvent(btn){
    let displayValue = 0;
    btn.addEventListener("click", ()=>{
        displayValue = btn.value
    })
    
    
}
console.log(numberEvent(btnOne))
//each time btn clicked add new val to VAR but dont replace,






function add(num1,num2){
    return parseInt(num1) + parseInt(num2)
}
function subtract(num1,num2){
    return parseInt(num1) - parseInt(num2)
}
function divide(num1,num2){
    return parseInt(num1) / parseInt(num2)
}
function multiply(num1,num2){
    return parseInt(num1) * parseInt(num2)
}

function operate(operator){
    return operator
}

