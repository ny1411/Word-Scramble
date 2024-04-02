const words = ['javascript', 'html', 'css', 'python', 'java', 'ruby', 'php', 'swift', 'kotlin', 'flutter', 'react', 'rust', 'node.js'];

let currentWord, scrambledWord;

function selectRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function scrambleWord(word) {
  return word.split('').sort(() => Math.random()*(0.95-0.35)-0.35).join('');
}

function displayScrambledWord() {
  currentWord = selectRandomWord();
  scrambledWord = scrambleWord(currentWord);
  document.getElementById('word').innerText = scrambledWord;
}

function checkGuess() {
  const guess = document.getElementById('guess').value.toLowerCase();
  if (guess == currentWord) {
    document.getElementById('message').innerText = 'Correct!';
  } else {
    document.getElementById('message').innerText = 'Incorrect. Try again!';
  }
}

document.getElementById('submit').addEventListener('click', checkGuess);
document.getElementById('new-word').addEventListener('click', () => {
  displayScrambledWord();
  document.getElementById('guess').value = '';
  document.getElementById('message').innerText = '';
});

// Initialize game
displayScrambledWord();