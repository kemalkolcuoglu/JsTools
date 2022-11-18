const numberInput = document.getElementById('numberInput');
const convertedOutput = document.getElementById('convertedOutput');
const orginalBase = document.getElementById('orginalBase');
const targetBase = document.getElementById('targetBase');

numberInput.addEventListener('input', convertWithAlgorithm);
orginalBase.addEventListener('input', convertWithAlgorithm);
targetBase.addEventListener('input', convertWithAlgorithm);

function convertWithAlgorithm() {
  const orginalBaseValue = parseInt(orginalBase.value);
  const targetBaseValue = parseInt(targetBase.value);

  if (orginalBaseValue > targetBaseValue) {
    let convertedValue = '';
    let number = parseInt(numberInput.value);
    while (number > 1) {
      remainer = number % targetBaseValue;
      number = parseInt(number / targetBaseValue);
      convertedValue = remainer.toString() + convertedValue;
    }
    convertedValue = number.toString() + convertedValue;
    convertedOutput.value = convertedValue;
  }
  else {
    let convertedValue = 0;
    let number = numberInput.value.toString();
    let numberOfDigits = number.length;
    for(let digit = numberOfDigits;digit > 0; digit--){
      let value = parseInt(number.charAt(digit-1));
      digitValue = value * Math.pow(orginalBaseValue, numberOfDigits-digit);
      convertedValue += digitValue
    }
    convertedOutput.value = convertedValue;
  }
}

setInputFilter(numberInput, function (value) {
  return /^\d*$/.test(value);
});

function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}