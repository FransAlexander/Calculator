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
const displayTopOperator = document.querySelector(".display_numbers_top--operator")
const displayTopLast = document.querySelector(".display_numbers_top--last")
const displayBottomResult = document.querySelector(".display_numbers_bottom--calcResult")

let numberValue1 = []
let numberValue2 = []
let displayNumBeforeOperator = "";
let displayNumAfterOperator = "";
let displayOperator = "";
let numberPlacementOnDisplay = "beforeOperator"
let SELECTED_OPERATOR = ""

btnZero.addEventListener("click",displayNum1(btnZero))
btnOne.addEventListener("click",displayNum1(btnOne))
btnTwo.addEventListener("click",displayNum1(btnTwo))
btnThree.addEventListener("click",displayNum1(btnThree))
btnFour.addEventListener("click",displayNum1(btnFour))
btnFive.addEventListener("click",displayNum1(btnFive))
btnSix.addEventListener("click",displayNum1(btnSix))
btnSeven.addEventListener("click",displayNum1(btnSeven))
btnEight.addEventListener("click",displayNum1(btnEight))
btnNine.addEventListener("click",displayNum1(btnNine))

function displayNum1(number){
    number.addEventListener("click", ()=>{
        if(numberPlacementOnDisplay === "beforeOperator"){
            numberValue1.push(number.value)
            displayNumBeforeOperator = parseInt(numberValue1.toString().replaceAll(",",""))
            displayTopFirst.textContent = displayNumBeforeOperator
            console.log(number.value)
        }else if(numberPlacementOnDisplay === "afterOperator"){
            numberValue2.push(number.value)
            displayNumAfterOperator = parseInt(numberValue2.toString().replaceAll(",",""))
            displayTopLast.textContent = displayNumAfterOperator
            console.log(number.value)
            }
        })
    }
    


btnMultiply.addEventListener("click",function(){
    SELECTED_OPERATOR = "multiply"
    numberPlacementOnDisplay = "afterOperator"
    displayTopOperator.textContent = "*"
})

btnEquals.addEventListener("click",function(){
    displayBottomResult.textContent = multiply(displayNumBeforeOperator,displayNumAfterOperator)
    
})

//Add eventlistenr to nu numbers, event1 will store numbers in displayNymbers1 Variable,
//when Operator is clicket aka chosen remove Event1 and add event 2, event 2 stores numvbers in displaynumber2 variable
//so first numbers entered befre operator stored in dN1, and after operator is clicked no nomre numbers are stored in dN1 but instead in dN2

function plusOperator(){
    storedNumber1 = displayNumBeforeOperator;
    
}

function displayContentAnswer(){

}


btnDivison.addEventListener("click",function(){

})


btnAddition.addEventListener("click",function(){

})

btnSubtract.addEventListener("click",function(){
  
})



function add(){
    
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



//When NUMBERS gets cLICKED triggers EVENT to send the value of button clicked
//to the variable that holds total of number, in an ARRAY that i convert to numbers and return
//when non numbeerrs (% * + -) gets CLICKED triggers EVENT to and choosen  OPERATOR to
//the numbers variable, so example 123 *  it would be added after the numbers
//ONCE operator btn is clicked Number eneterd after will land behind the operator 



// create class btnNUmbers and add Elistener to all of them to listen for vlaue of btn 


//WHEN + btn is CLICKED, store DispalyNumbers in VAR 1 concat + at the end and reset displayNumbers VAR