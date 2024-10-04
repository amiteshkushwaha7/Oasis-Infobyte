let display = document.getElementById('display');
let currentValue = '';

function appendCharacter(char) {
    currentValue += char;
    display.value = currentValue;
}

function performOperation(operator) {
    currentValue += ' ' + operator + ' ';
    display.value = currentValue;
}

function calculate() {
    try {
        display.value = eval(currentValue);
        currentValue = display.value;
    } catch (error) {
        display.value = 'Error';
        currentValue = '';
    }
}

function calculateSquareRoot() {
    try {
        currentValue = Math.sqrt(eval(currentValue)).toString();
        display.value = currentValue;
    } catch (error) {
        display.value = 'Error';
        currentValue = '';
    }
}

function clearDisplay() {
    currentValue = '';
    display.value = '';
}

function deleteLast() {
    currentValue = currentValue.slice(0, -1);
    display.value = currentValue;
}