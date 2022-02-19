function getNumber(firstNumber, secondNumber) {
  firstNumber = Math.ceil(firstNumber);
  secondNumber = Math.floor(secondNumber);
  if (firstNumber < 0) {
    return false;
  }
  if (secondNumber > firstNumber) {
    return Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
  }
  return false;
}

getNumber();

function lineLenght(currentLine, maxLine) {
  if (currentLine.length > maxLine) {
    return false;
  }
  return true;
}

lineLenght();
