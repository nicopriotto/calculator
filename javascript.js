// Operational Functions

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let mod = (a, b) => a % b;

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    } else if (operator === "%") {
        return mod(num1, num2)
    } else if (operator === "=") {
        return array[0];
    }
}

// Display Numbers

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
    clearDisplay();
    while (array.length > 0) {
        array.pop()
    }
})

function clearDisplay() {
    while (currentNumber.length > 0) {
        currentNumber.pop()
    }
    display.textContent = currentNumber.join('');
}

// Operators

const operators = document.querySelectorAll(".operator");

const array = [];

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        array.push(Number(display.textContent))
        clearDisplay();
        array.push(operator.innerHTML)
        if (array.length >= 3) {
            let newNumber = operate(array[1], array[0], array[2])
            display.textContent = newNumber;
            for(let i = 0; i < 3; i++) {
                array.shift()
            }
            array.unshift(newNumber);
        }
    })
})