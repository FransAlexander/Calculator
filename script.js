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
const displayTop = document.querySelector(".display_numbers_top")


btnZero.addEventListener("click",function(){
    getNumberValue(btnZero)
    convertArrayToNumber()
    displayContentEquation()
})
btnOne.addEventListener("click",function(){
    getNumberValue(btnOne)
    convertArrayToNumber()
    displayContentEquation()
})
btnTwo.addEventListener("click",function(){
    getNumberValue(btnTwo)
    convertArrayToNumber()
    displayContentEquation()

})
btnThree.addEventListener("click",function(){
    getNumberValue(btnThree)
    convertArrayToNumber()
    displayContentEquation()
})
btnFour.addEventListener("click",function(){
    getNumberValue(btnFour)
    convertArrayToNumber()
    displayContentEquation()
})
btnFive.addEventListener("click",function(){
    getNumberValue(btnFive)
    convertArrayToNumber()
    displayContentEquation()
})
btnSix.addEventListener("click",function(){
    getNumberValue(btnSix)
    convertArrayToNumber()
    displayContentEquation()
})
btnSeven.addEventListener("click",function(){
    getNumberValue(btnSeven)
    convertArrayToNumber()
    displayContentEquation()
})
btnEight.addEventListener("click",function(){
    getNumberValue(btnEight)
    convertArrayToNumber()
    displayContentEquation()
})
btnNine.addEventListener("click",function(){
    getNumberValue(btnNine)
    convertArrayToNumber()
    displayContentEquation()
})

btnEquals.addEventListener("click",function(){

    add()
})




let numberValue = []
let displayNumbers1 = 0;
let displayNumbers2 = 0;


function getNumberValue(num){
    numberValue.push(num.value)
} 
function convertArrayToNumber(){
    displayNumbers1 = parseInt(numberValue.toString().replaceAll(",",""))
    console.log(displayNumbers1)
}

function displayContentEquation(){
    displayTop.textContent = displayNumbers1
}
function displayContentAnswer(){

}




function add(){
    let number1 = displayNumbers1
    displayNumbers2 = 0;
    let number2 = displayNumbers2
    console.log(number1)
    console.log(displayNumbers)
    console.log(number2)
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

