const values = document.querySelectorAll('.buttonrow .value');
const operators = document.querySelectorAll('.buttonrow .operator');
const viewPortText = document.querySelector('.viewport span');
const clear = document.querySelector('#C');
const memClear = document.querySelector('#AC');
const add = document.querySelector('#add');
const equals = document.querySelector('#equals');

let val1 = 'await';
let val2 = 'await';
let currentOperation = 'await';

values.forEach(value => {
    value.addEventListener('click', () => {
        if (val1 != 'await' && val1.toFixed(3) == parseFloat(viewPortText.textContent).toFixed(3)) {
            clearDisplay();
        }
        viewPortText.textContent += value.textContent;
    })
});

clear.addEventListener('click', clearDisplay);

memClear.addEventListener('click', reset);

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (val2 == 'await') {
            val2 = parseFloat(viewPortText.textContent);
        }
        evaluate();
        currentOperation = operator.textContent;
        updateDisplay();
    });
});

equals.addEventListener('click', () => {
    if (val2 == 'await') {
        val2 = parseFloat(viewPortText.textContent);
    }
    evaluate();
    currentOperation = 'await';
    updateDisplay();
})

function clearDisplay() {
    viewPortText.textContent = '';
}

function evaluate() {
    if (val1 === 'await') {
        val1 = val2;
    } else if (val2 != 'await') {
        switch(currentOperation) {
            case '+':
                val1 = val1 + val2;
                break;
            case '-':
                val1 = val1 - val2;
                break;
            case 'x':
                val1 = val1 * val2;
                break;
            case '÷':
                if (val2 != 0) {
                    val1 = val1 / val2;
                } else {
                    window.alert('Error: Divsion by 0');
                    val1 = 0;
                }
                break;
            case '%':
                val1 = val1 % val2;
                break;
        }
    }
    val2 = 'await';
}

function updateDisplay() {
    if ((val1 % 1) != 0) {
        viewPortText.textContent = val1.toFixed(3);
    } else {
        viewPortText.textContent = val1;
    }
}

function reset() {
    val1 = 'await';
    val2 = 'await';
    currentOperation = 'await';
    clearDisplay(); 
}

