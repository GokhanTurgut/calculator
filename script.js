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
const dotBtn = document.getElementById('dot');

// Writing numbers on the display screen.

window.addEventListener('keydown', (e) => {
    console.log(e);
})
    
oneBtn.addEventListener('click', () => {
    writeNumber('1');
})
twoBtn.addEventListener('click', () => {
    writeNumber('2');
})
threeBtn.addEventListener('click', () => {
    writeNumber('3');
})
fourBtn.addEventListener('click', () => {
    writeNumber('4');
})
fiveBtn.addEventListener('click', () => {
    writeNumber('5');
})
sixBtn.addEventListener('click', () => {
    writeNumber('6');
})
sevenBtn.addEventListener('click', () => {
    writeNumber('7');
})
eightBtn.addEventListener('click', () => {
    writeNumber('8');
})
nineBtn.addEventListener('click', () => {
    writeNumber('9');
})
zeroBtn.addEventListener('click', () => {
    writeNumber('0');
})
dotBtn.addEventListener('click', () => {
    writeNumber('.');
    dotBtn.disabled = true;
})

// Keyboard support.

for (i = 0; i < 10; i++) {
    keyboardSupport(`${i}`);
}

window.addEventListener('keydown', (e) => {
    if (e.key == '.' && dotBtn.disabled == false) {
        writeNumber('.');
        dotBtn.disabled = true;
    }
})

window.addEventListener('keydown', (e) => {
    if (e.key == 'Backspace') {
        display.textContent = display.textContent.slice(0, -1);
    }
})

window.addEventListener('keydown', (e) => {
    if (e.key == '+') {
        if (operationStatus === false) {
            firstOperation('+');
        }
        else if (operationStatus === true) {
            getResult('+');
        }
    }
})

window.addEventListener('keydown', (e) => {
    if (e.key == '-') {
        if (operationStatus === false) {
            firstOperation('-');
        }
        else if (operationStatus === true) {
            getResult('-');
        }
    }
})

window.addEventListener('keydown', (e) => {
    if (e.key == '*') {
        if (operationStatus === false) {
            firstOperation('x');
        }
        else if (operationStatus === true) {
            getResult('x');
        }
    }
})

window.addEventListener('keydown', (e) => {
    if (e.key == '/') {
        if (operationStatus === false) {
            firstOperation('÷');
        }
        else if (operationStatus === true) {
            getResult('÷');
        }
    }
})

window.addEventListener('keydown', (e) => {
    if (e.key == '=') {
        getResult();
        operationStatus = false;
    }
})

// Clear and Delete button functionality.

clearBtn.addEventListener('click', () => {
    clear();
})
deleteBtn.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
})

let currentNumber;
let previousNumber;
let total;
let operationType;
let shouldClear = false;
let operationStatus = false;

plusBtn.addEventListener('click', () => {
    if (operationStatus === false) {
        firstOperation('+');
    }
    else if (operationStatus === true) {
        getResult('+');
    }
})

minusBtn.addEventListener('click', () => {
    if (operationStatus === false) {
        firstOperation('-');
    }
    else if (operationStatus === true) {
        getResult('-');
    }
})

multiplyBtn.addEventListener('click', () => {
    if (operationStatus === false) {
        firstOperation('x');
    }
    else if (operationStatus === true) {
        getResult('x');
    }
})

divideBtn.addEventListener('click', () => {
    if (operationStatus === false) {
        firstOperation('÷');
    }
    else if (operationStatus === true) {
        getResult('÷');
    }
})

equalBtn.addEventListener('click', () => {
    getResult();
    operationStatus = false;
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
    operationStatus = false;
    dotBtn.disabled = false;
}

function writeNumber(number) {
    if (shouldClear === true) {
        display.textContent = '';
        shouldClear = false;
        display.textContent += number;
    }
    else if (shouldClear === false) {
        display.textContent += number;
    }
}

function firstOperation (operation) {
    previousNumber = display.textContent;
    previousNumber = parseFloat(previousNumber);
    shouldClear = true;
    operationStatus = true;
    dotBtn.disabled = false;
    operationType = operation;
}

function getResult (operation) {
    currentNumber = display.textContent;
    currentNumber = parseFloat(currentNumber);
    total = operate(previousNumber, currentNumber, operationType);
    display.textContent = `${total}`;
    previousNumber = display.textContent;
    previousNumber = parseFloat(previousNumber);
    shouldClear = true;
    dotBtn.disabled = false;
    operationType = operation;
}

function keyboardSupport(key) {
    window.addEventListener('keydown', (e) => {
        if (e.key == key) {
            writeNumber(key);
        }
    })
}