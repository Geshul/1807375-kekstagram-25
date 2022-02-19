function getRandomInteger(firstNumber, secondNumber) {
  const min = Math.ceil(firstNumber);
  const max = Math.floor(secondNumber);
  if (min < 0) {
    return false;
  }
  if (max > min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return false;
}

getRandomInteger(1, 99);

function checkStringMaxLength(currentString, maxString) {
  if (currentString.length > maxString) {
    return false;
  }
  return true;
}

checkStringMaxLength('Тест', 5);
