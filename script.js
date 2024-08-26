const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const generateBtn = document.getElementById('generate');
const resultDiv = document.getElementById('result');

generateBtn.addEventListener('click', () => {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  // Validate inputs
  if (isNaN(min) || isNaN(max) || min >= max) {
    resultDiv.textContent = "Please enter valid minimum and maximum values (min < max)";
    return;
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  resultDiv.textContent = "Random Number: " + randomNumber;
});