let display = document.getElementById('display')
let currentInput = document.getElementById('currentInput')
let mathOperator = document.getElementById('mathOperator')
let preValue = 0

function InputDisplay(value){
    currentInput += value
    display.innerText = currentInput
}

function removeDisplay(){
    currentInput = ''
    mathOperator = ''
    preValue = 0
    display.innerText = '0'
}

function resultCalculation(){
    if(currentInput === '') return;
    const currentValue = parseFloat(currentInput)

    switch (mathOperator){
        case '+':
            preValue += currentValue;
        break;
        case '-':
            preValue -= currentValue;
        break;
        case '*':
            preValue *= currentValue;
        case '/':
            if(currentValue !== 0){
                preValue /= currentValue;
            }else{
                alert('Error : Division by zero');
                clearDisplay();
                return;
            }
        break;
    default:
        preValue = currentValue ;
        break;                
    }

    display.innerText = preValue;
    currentInput = '';
    mathOperator = '';
}

clearDisplay();