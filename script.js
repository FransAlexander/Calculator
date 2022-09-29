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
const numbers = document.querySelectorAll(".numPad")
const displayTopFirst = document.querySelector(".display_numbers_top--first")
const displayTopLast = document.querySelector(".display_numbers_top--last")
const displayOperator = document.querySelector(".display_numbers_top--operator")
const displayBottomResult = document.querySelector(".display_numbers_bottom--calcResult")

let numberValue1 = []
let numberValue2 = []
let numberBeforeOperator = "";
let numberAfterOperator = "";
let operator = "";
let numberPlacement = "beforeOperator"
let SELECTED_OPERATOR = ""
let RESULT = 0;
let STATUS = ""

btnZero.addEventListener("click",displayNum(btnZero))
btnOne.addEventListener("click",displayNum(btnOne))
btnTwo.addEventListener("click",displayNum(btnTwo))
btnThree.addEventListener("click",displayNum(btnThree))
btnFour.addEventListener("click",displayNum(btnFour))
btnFive.addEventListener("click",displayNum(btnFive))
btnSix.addEventListener("click",displayNum(btnSix))
btnSeven.addEventListener("click",displayNum(btnSeven))
btnEight.addEventListener("click",displayNum(btnEight))
btnNine.addEventListener("click",displayNum(btnNine))

btnEquals.addEventListener("click",()=>{
    if(typeof numberBeforeOperator === "number" && typeof numberAfterOperator === "number"){
        STATUS = "equals"
        operate()
    }
})

btnClear.addEventListener("click", clearAll)

btnBackspace.addEventListener("click",()=>{

})
btnDot.addEventListener("click",()=>{

})

function multipleOperatorCalc(operator){
    num1 = RESULT
}

function displayNum(number){
    number.addEventListener("click", ()=>{
        STATUS = "Number"
        if(numberPlacement === "beforeOperator"){
                numberValue1.push(number.value)
                numberBeforeOperator = parseInt(numberValue1.toString().replaceAll(",",""))
                displayTopFirst.textContent = numberBeforeOperator
        }else if(numberPlacement === "afterOperator"){
                numberValue2.push(number.value)
                numberAfterOperator = parseInt(numberValue2.toString().replaceAll(",",""))
                displayTopLast.textContent = numberAfterOperator
            }
        })
    }

btnDivison.addEventListener("click",function(){
    SELECTED_OPERATOR = "div"
    numberPlacement = "afterOperator"
    displayOperator.textContent = "/"
    if(STATUS === "equals"){
        numberBeforeOperator = RESULT
    }
})

btnMultiply.addEventListener("click",function(){
    SELECTED_OPERATOR = "multi"
    numberPlacement = "afterOperator"
    displayOperator.textContent = "*"
    if(STATUS === "equals"){
        numberBeforeOperator = RESULT
    }
})

btnAddition.addEventListener("click",function(){
    SELECTED_OPERATOR = "add"
    numberPlacement = "afterOperator"
    displayOperator.textContent = "+"
    if(STATUS === "equals"){
        numberBeforeOperator = RESULT
    }
})

btnSubtract.addEventListener("click",function(){
    SELECTED_OPERATOR = "sub"
    numberPlacement = "afterOperator"
    displayOperator.textContent = "-"
    if(STATUS === "equals"){
        numberBeforeOperator = RESULT
    }
})


function clearAll(){
    displayTopFirst.textContent = "";
    displayTopLast.textContent = "";
    displayOperator.textContent = "";
    numberValue1 = []
    numberValue2 = []
    numberBeforeOperator = 0;
    numberAfterOperator = 0;
    operator = "";
    numberPlacement = "beforeOperator"
    SELECTED_OPERATOR = ""
    RESULT = 0;
}
function clearOperate(){
    displayTopLast.textContent = "";
    displayOperator.textContent = "";
    numberValue1 = []
    numberValue2 = []
    numberBeforeOperator = 0;
    numberAfterOperator = 0;
    operator = "";
    numberPlacement = "beforeOperator"
    SELECTED_OPERATOR = ""
}


function operate(){
    if(SELECTED_OPERATOR === "div"){
        RESULT = divide(numberBeforeOperator,numberAfterOperator)
        displayTopFirst.textContent = RESULT;
        clearOperate()
    }else if(SELECTED_OPERATOR === "multi"){
        RESULT = multiply(numberBeforeOperator,numberAfterOperator)
        displayTopFirst.textContent = RESULT;
        clearOperate()
    }else if(SELECTED_OPERATOR === "sub"){
        RESULT = subtract(numberBeforeOperator,numberAfterOperator)
        displayTopFirst.textContent = RESULT;
        clearOperate()
    }else if(SELECTED_OPERATOR === "add"){
        RESULT = add(numberBeforeOperator,numberAfterOperator)
        displayTopFirst.textContent = RESULT;
        clearOperate()
    }
}

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


// trying out STATUS, basically if i click for example the EQAUALS btn, then status is changed to "equals"
//depening on STATUS the different btns act differently,
// if STATUS = equals for example, number btns should clear all variables valeus, so aka start calcs from scratch,
// but if STATUS = equals and i click the operator btns i take the result from equals and use that 
// as  the first number in the operation aka numberBeforeOperator, 
// example : 8/2 = 4 so RESULT = 4.....IF "add"(+) operator is CLICKED then num1 in add(num1,num2) function = RESULT(4)
// so it looks something like ( 4 + "..." ) after the initial CLICK, then IF num2 is enterd and Equals is CLICKED again it runs 4 + whatever num is enterd as second.