const inputText = document.getElementById('input');
const outputText = document.getElementById('output');
const latin = document.getElementById('latin');
const morse = document.getElementById('morse');
let isLatinChecked = true;
const dict = {
  'A': '.-', 'B': '-...', 'C': '-.-.',
  'D': '-..', 'E': '.', 'F': '..-.',
  'G': '--.', 'Ğ': '--.', 'H': '....',
  'I': '..', 'İ': '..', 'J': '.---',
  'K': '-.-', 'L': '.-..', 'M': '--',
  'N': '-.', 'O': '---', 'Ö': '---',
  'P': '.--.', 'Q': '--.-', 'R': '.-.',
  'S': '...', 'T': '-', 'U': '..-',
  'Ü': '..-', 'V': '...-', 'W': '.--',
  'X': '-..-', 'Y': '-.--', 'Z': '--..',
  '1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....', '6': '-....',
  '7': '--...', '8': '---..', '9': '----.',
  '0': '-----', ', ': '--..--', '.': '.-.-.-',
  '?': '..--..', '/': '-..-.', '-': '-....-',
  '(': '-.--.', ')': '-.--.-', '!': '-.-.--',
  "'": '.----.', '+': '.-.-.', '&': '.-...',
  '=': '-...-', '"': '.-..-.', '@': '.--.-.',
  ' ': '/'
}

inputText.addEventListener('input', translate);
latin.addEventListener('input', alphabetChanged);
morse.addEventListener('input', alphabetChanged);

function alphabetChanged() {
  isLatinChecked = latin.checked;
  let orginalText = inputText.value;
  inputText.value = outputText.value;
  outputText.value = orginalText;
}

function translate() {
  let text = inputText.value;
  let letterCount = text.length;
  if (letterCount == 0) {
    inputText.value = '';
    outputText.value = '';
    return;
  }
  let newText = '';
  if (isLatinChecked) {
    for (let count = 0; count < letterCount; count++) {
      let letter = text[count].toUpperCase();
      let translatedLetter = dict[letter]
      if (translatedLetter == undefined)
        translatedLetter = 'X'
      newText += translatedLetter;
      newText += ' ';
    }
  }
  else {
    let letters = text.split(' ')
    for (let count = 0; count < letters.length; count++) {
      let translatedLetter;
      if (letters[count] == '/') {
        translatedLetter = ' ';
      }
      else {
        translatedLetter = getKeyByValue(dict, letters[count]);
        if (translatedLetter == undefined)
          translatedLetter = 'X'
      }
      newText += translatedLetter;
    }
  }

  outputText.value = newText;
}

function getKeyByValue(object, value) {
  let r = Object.keys(object).find(key => object[key] === value);
  return r;
}