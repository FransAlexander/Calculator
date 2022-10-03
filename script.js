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


/*------------------
--Number Selection---
-------------------*/
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
            STATUS = ""
            if(numberPlacement === "beforeOperator"){
                    numberValue1.push(number.value)
                    numberBeforeOperator = parseFloat(numberValue1.toString().replaceAll(",",""))
                    displayTopFirst.textContent = numberBeforeOperator
            }else if(numberPlacement === "afterOperator"){
                    numberValue2.push(number.value)
                    numberAfterOperator = parseFloat(numberValue2.toString().replaceAll(",",""))
                    displayTopLast.textContent = numberAfterOperator
                }
            })
        }

/*------------------
--Operator Selection
-------------------*/
btnDivison.addEventListener("click",function(){
    operatorBtnCalc()
    operatorBtnSelect("div","/")
})

btnMultiply.addEventListener("click",function(){
    operatorBtnCalc()
    operatorBtnSelect("multi","*")
})

btnAddition.addEventListener("click",function(){
    operatorBtnCalc()
    operatorBtnSelect("add","+")
})

btnSubtract.addEventListener("click",function(){
    operatorBtnCalc()
    operatorBtnSelect("sub","-")
})

    function operatorBtnSelect(op,sign){
        //allows the use of result of a calc for further calcs
        if(STATUS === "equals"){
            numberBeforeOperator = RESULT
        }
        //prevent from clicking operator before first number is inputed
        if(typeof numberBeforeOperator === "number"){
            SELECTED_OPERATOR = op
            numberPlacement = "afterOperator"
            operator = sign
            displayOperator.textContent = sign
            }
         }
            //calculates previous numbers if operator btn is clicked instaed of equals btn
            // allows you to input a series of operators in a calculation i.e 1+2/3*5
            function operatorBtnCalc(){
                if(operator === "+"){
                    RESULT = add(numberBeforeOperator,numberAfterOperator)
                    displayTopFirst.textContent = RESULT;
                    displayTopLast.textContent = "";
                    numberBeforeOperator = RESULT;
                    numberAfterOperator = 0;
                    numberValue2 = []
                }else if(operator === "-"){
                    RESULT = subtract(numberBeforeOperator,numberAfterOperator)
                    displayTopFirst.textContent = RESULT;
                    displayTopLast.textContent = "";
                    numberBeforeOperator = RESULT;
                    numberAfterOperator = 0;
                    numberValue2 = []
                }else if(operator === "*"){
                    RESULT = multiply(numberBeforeOperator,numberAfterOperator)
                    displayTopFirst.textContent = RESULT;
                    displayTopLast.textContent = "";
                    numberBeforeOperator = RESULT;
                    numberAfterOperator = 0;
                    numberValue2 = []
                }else if(operator === "/"){
                    RESULT = divide(numberBeforeOperator,numberAfterOperator)
                    displayTopFirst.textContent = RESULT;
                    displayTopLast.textContent = "";
                    numberBeforeOperator = RESULT;
                    numberAfterOperator = 0;
                    numberValue2 = []
                    }
                }
                
btnEquals.addEventListener("click",()=>{
    if(typeof numberBeforeOperator === "number" && typeof numberAfterOperator === "number"){
        STATUS = "equals"
        operate()
    }
})

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
                return parseFloat(num1) + parseFloat(num2)
            }
            function subtract(num1,num2){
                return parseFloat(num1) - parseFloat(num2)
            }
            function divide(num1,num2){
                return parseFloat(num1) / parseFloat(num2)
            }
            function multiply(num1,num2){
                return parseFloat(num1) * parseFloat(num2)
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

/*------------------
-----misc buttons----
-------------------*/

btnDot.addEventListener("click",displayNum(btnDot))

btnClear.addEventListener("click", ()=>{
    displayTopFirst.textContent = "";
    displayTopLast.textContent = "";
    displayOperator.textContent = "";
    numberValue1 = []
    numberValue2 = []
    numberBeforeOperator = "";
    numberAfterOperator = "";
    operator = "";
    numberPlacement = "beforeOperator"
    RESULT = 0;
})

btnBackspace.addEventListener("click",()=>{
    if(numberPlacement === "beforeOperator"){
        numberValue1.pop()
        numberBeforeOperator = parseInt(numberValue1.toString().replaceAll(",",""))
        displayTopFirst.textContent = numberBeforeOperator
        if(numberValue1.length == 0){
            displayTopFirst.textContent = ""
        }
    }else if((numberPlacement === "afterOperator")){
        numberValue2.pop()
        numberAfterOperator = parseInt(numberValue2.toString().replaceAll(",",""))
        displayTopLast.textContent = numberAfterOperator
        if(numberValue2.length == 0){
            displayTopLast.textContent = ""
        }
    }
})


