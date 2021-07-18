// Getting elements from the HTML file.
const display = document.getElementById('display');
const deleteBtn = document.getElementById('delete');
const clearBtn = document.getElementById('clear');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const equalBtn = document.getElementById('equal');
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const zeroBtn = document.getElementById('zero');

// Writing numbers on the display screen.

oneBtn.addEventListener('click', () => {
    display.textContent += '1';
})
twoBtn.addEventListener('click', () => {
    display.textContent += '2';
})
threeBtn.addEventListener('click', () => {
    display.textContent += '3';
})
fourBtn.addEventListener('click', () => {
    display.textContent += '4';
})
fiveBtn.addEventListener('click', () => {
    display.textContent += '5';
})
sixBtn.addEventListener('click', () => {
    display.textContent += '6';
})
sevenBtn.addEventListener('click', () => {
    display.textContent += '7';
})
eightBtn.addEventListener('click', () => {
    display.textContent += '8';
})
nineBtn.addEventListener('click', () => {
    display.textContent += '9';
})
zeroBtn.addEventListener('click', () => {
    display.textContent += '0';
})

// Clear and Delete button functionality.

clearBtn.addEventListener('click', () => {
    clear();
})
deleteBtn.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1)
})

let currentNumber;
let previousNumber;
let total;
let operationType;

plusBtn.addEventListener('click', () => {
    if (previousNumber === undefined) {
        previousNumber = display.textContent;
        previousNumber = parseFloat(previousNumber);
        operationType = '+';
        display.textContent = '';
    }
    else {
        currentNumber = display.textContent;
        currentNumber = parseFloat(currentNumber);
        total = previousNumber + currentNumber;
        display.textContent = `${total}`;
    }
})

equalBtn.addEventListener('click', () => {
    currentNumber = display.textContent;
    currentNumber = parseFloat(currentNumber);
    total = operate(previousNumber, currentNumber, operationType);
    display.textContent = `${total}`;
})

function operate(firstNumber, secondNumber, operation) {
    switch (operation) {
        case '+':
            return firstNumber + secondNumber;
            break;
    
        case '-':
            return firstNumber - secondNumber;
            break;
        
        case 'x':
            return firstNumber * secondNumber;
            break;
        
        case '÷':
            return firstNumber / secondNumber;
            break; 
    }
}


function clear() {
    display.textContent = '';
    previousNumber = undefined;
    currentNumber = undefined;
    operationType = undefined;
}