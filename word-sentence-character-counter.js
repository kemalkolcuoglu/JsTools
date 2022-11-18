const inputData = document.getElementById('input');
const wordCount = document.getElementById('wordCount');
const sentenceCount = document.getElementById('sentenceCount');
const characterCount = document.getElementById('characterCount');

inputData.addEventListener('input', parseText);

function parseText() {
  var text = inputData.value;
  if (text && text != '') {
    var wordList = text.match(/\w+\s/g);
    wordCount.textContent = wordList.length;
    var sentenceList = text.match(/\s+[^.!?]*[.!?]/);
    sentenceCount.textContent = sentenceList.length;
    var characterList = text.split(/./);
    characterCount.textContent = characterList.length;
  }
  else {
    wordCount.textContent = 0
    sentenceCount.textContent = 0
    characterCount.textContent = 0
  }
}