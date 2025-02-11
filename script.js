let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    if (value === 'C') {
      currentInput = '';
      operator = '';
      firstOperand = '';
      secondOperand = '';
      display.value = '';
    } 
    else if (value === '=') {
      if (firstOperand && operator && currentInput) {
        secondOperand = currentInput;
        const result = calculate(firstOperand, secondOperand, operator);
        display.value = result;
        currentInput = result;
        operator = '';
        firstOperand = '';
      }
    } 
    else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput) {
        firstOperand = currentInput;
        operator = value;
        currentInput = '';
      }
    } 
    else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
function calculate(first, second, operator) {
  first = parseFloat(first);
  second = parseFloat(second);
  switch (operator) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    case '/':
      return first / second;
    default:
      return 0;
  }
}