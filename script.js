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

function displayNum(number){
    number.addEventListener("click", ()=>{
        if(numberPlacement === "beforeOperator"){
            numberValue1.push(number.value)
            numberBeforeOperator = parseInt(numberValue1.toString().replaceAll(",",""))
            displayTopFirst.textContent = numberBeforeOperator
            console.log(number.value)
        }else if(numberPlacement === "afterOperator"){
            numberValue2.push(number.value)
            numberAfterOperator = parseInt(numberValue2.toString().replaceAll(",",""))
            displayTopLast.textContent = numberAfterOperator
            console.log(number.value)
            }
        })
    }
    




btnEquals.addEventListener("click",function(){
    if(SELECTED_OPERATOR === "div"){
        RESULT = divide(numberBeforeOperator,numberAfterOperator)
        displayBottomResult.textContent = RESULT
    }else if(SELECTED_OPERATOR === "multi"){
        RESULT = multiply(numberBeforeOperator,numberAfterOperator)
        displayBottomResult.textContent = RESULT
    }else if(SELECTED_OPERATOR === "sub"){
        RESULT = subtract(numberBeforeOperator,numberAfterOperator)
        displayBottomResult.textContent = RESULT
    }else if(SELECTED_OPERATOR === "add"){
        RESULT = add(numberBeforeOperator,numberAfterOperator)
        displayBottomResult.textContent = RESULT
    }
    
    
})

//Add eventlistenr to nu numbers, event1 will store numbers in displayNymbers1 Variable,
//when Operator is clicket aka chosen remove Event1 and add event 2, event 2 stores numvbers in displaynumber2 variable
//so first numbers entered befre operator stored in dN1, and after operator is clicked no nomre numbers are stored in dN1 but instead in dN2





btnDivison.addEventListener("click",function(){
    SELECTED_OPERATOR = "div"
    numberPlacement = "afterOperator"
    displayOperator.textContent = "/"
})

btnMultiply.addEventListener("click",function(){
    SELECTED_OPERATOR = "multi"
    numberPlacement = "afterOperator"
    displayOperator.textContent = "*"
})

btnAddition.addEventListener("click",function(){
    SELECTED_OPERATOR = "add"
    numberPlacement = "afterOperator"
    displayOperator.textContent = "+"
})

btnSubtract.addEventListener("click",function(){
    SELECTED_OPERATOR = "sub"
    numberPlacement = "afterOperator"
    displayOperator.textContent = "-"
})



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
    
}



//When NUMBERS gets cLICKED triggers EVENT to send the value of button clicked
//to the variable that holds total of number, in an ARRAY that i convert to numbers and return
//when non numbeerrs (% * + -) gets CLICKED triggers EVENT to and choosen  OPERATOR to
//the numbers variable, so example 123 *  it would be added after the numbers
//ONCE operator btn is clicked Number eneterd after will land behind the operator 



// create class btnNUmbers and add Elistener to all of them to listen for vlaue of btn 


//WHEN + btn is CLICKED, store DispalyNumbers in VAR 1 concat + at the end and reset displayNumbers VAR