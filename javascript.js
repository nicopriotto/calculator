// Operational Functions

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    } else {
        console.error("Operator Unknown");
    }
}

// Display Numbers

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const dot = document.querySelector("#dot");
const display = document.querySelector(".display")

const currentNumber = []

const numbers = document.querySelectorAll(".number")
numbers.forEach((item) => {
    item.addEventListener("click", () => {
        currentNumber.push(item.innerHTML);
        display.textContent = currentNumber.join('');
    })
})

// Clear and Backspace

const backspace = document.querySelector("#backspace");
const clear = document.querySelector("#clear");

backspace.addEventListener("click", () => {
    currentNumber.pop();
    display.textContent = currentNumber.join('');
})

clear.addEventListener("click", () => {
    clearDisplay()
})

function clearDisplay() {
    while (currentNumber.length > 0) {
        currentNumber.pop()
    }
    display.textContent = currentNumber.join('');
}

// Operators

const sum = document.querySelector("#sum");
const sub = document.querySelector("#subtract");
const mult = document.querySelector("#multiply");
const div = document.querySelector("#divide");
const mod = document.querySelector("#module")
const equal = document.querySelector(".equalButton")

const operators = document.querySelectorAll(".operator")
operators.forEach((item) => {
    item.addEventListener("click", () => {
        var num1 = Number(display.textContent);
        clearDisplay();
        equal.addEventListener("click", () => {
            var num2 = Number(display.textContent);
            display.textContent = operate(item.innerHTML, num1, num2);
        })
        
    })
})