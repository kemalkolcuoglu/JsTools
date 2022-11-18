const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');
const encodeButton = document.getElementById('encodeButton');
const decodeButton = document.getElementById('decodeButton');

encodeButton.addEventListener('click', encodeBase64);
decodeButton.addEventListener('click', decodeBase64);

function encodeBase64() {
  let text = textInput.value;
  let encodedText = btoa(text);
  textOutput.value = encodedText;
}

function decodeBase64() {
  try {
    let text = textInput.value;
    let encodedText = atob(text);
    textOutput.value = encodedText;
  }
  catch (err) {
    //textOutput.value = 'Text invalid for Base 64 decoding'
    textOutput.value = err.message
  }
}
