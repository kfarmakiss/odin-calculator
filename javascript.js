let n1 = 0, n2 = 0, displayValue='', operator='', finished = false;
const numberLimit = 9;
//display
const resultArea = document.querySelector('.result-area');

const numpad = document.querySelectorAll('.calc');
numpad.forEach(num => num.addEventListener('click', displayInp));

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', operatorPressed));

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', equalsPressed);

const delButton = document.querySelector('.delete');
delButton.addEventListener('click', delPressed);


function delPressed(e){
    if(resultArea.textContent.charAt(resultArea.textContent.length)=== operator) operator='';
    resultArea.textContent = resultArea.textContent.substring(0, resultArea.textContent.length-1);
    displayValue = displayValue.substring(0, displayValue.length-1);
}

//display function
function displayInp(e){
    if(finished){
        resultArea.textContent = '';
        displayValue = ''; 
        finished = false;
    }
    //if(resultArea.textContent.length >=numberLimit) return;
    if(e.target.textContent === 'AC'){
        resultArea.textContent = '';
        displayValue = '';
        n1 = 0;
        n2= 0;
        operator = '';
    }
    else{
        resultArea.textContent += e.target.textContent;
        displayValue += e.target.textContent;
    }
}


function operatorPressed(e){
    resultArea.textContent += e.target.textContent;
    displayValue += e.target.textContent;
    if(operator===''){
        operator = e.target.textContent;
    }
    else{
        n1 = parseFloat(displayValue.substring(0, displayValue.indexOf(operator)));
        n2 = parseFloat(displayValue.substring(displayValue.indexOf(operator)+1, displayValue.length));
        displayValue = operate(operator, n1, n2);
        operator = e.target.textContent;
        displayValue += operator;
        resultArea.textContent = displayValue;
    }
    
    
}

function equalsPressed(e){
    n1 = parseFloat(displayValue.substring(0, displayValue.indexOf(operator)));
    n2 = parseFloat(displayValue.substring(displayValue.indexOf(operator)+1, displayValue.length));
    let result = operate(operator, n1, n2);

    resultArea.textContent = result;
    if(result === Infinity) return;
    displayValue = result;
    finished = true;
    n1 = 0;
    n2 = 0;
    displayValue = '';
    operator = '';
}


//calculator functions

function add(n1, n2){
    let result = n1+n2;
    return result;
}

function substract(n1,n2){
    return n1-n2;
}

function multiply(n1, n2){
    return n1*n2;
}

function divide(n1, n2){
    if(n2===0){
        n1=0;
        n2=0;
        operator = '';
        displayValue = '';
        return 'kekw';
    }
    return n1/n2;
}

function operate(operator, n1, n2){
    //while(operator != '+' && operator != '-' && operator != '*' && operator != '/')
   // operator = prompt("Invalid input. Please give one of these operators: (+ - * /)");

    switch(operator){
        case '+':
            return add(n1, n2);
            break;
        case '-':
            return substract(n1, n2);
            break;
        case '/':
            return divide(n1, n2);
            break;
        case '*':
            return multiply(n1, n2);
            break;

    }
}



  




///15+6+7=
// 15 6 7
// + + =