const numberInput = document.getElementById('numberInput');
const factorialOutput = document.getElementById('factorialOutput');

numberInput.addEventListener('input', getFactorial);

function getFactorial() {
  factorialOutput.value = '';
  let number = parseInt(numberInput.value);
  let factorial = 1;
  while(number >= 1){
    factorial *= number;
    number--;
  }
  factorialOutput.value = factorial;
}