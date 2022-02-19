function getNumber(firstNumber, secondNumber) {
  firstNumber = Math.ceil(firstNumber);
  secondNumber = Math.floor(secondNumber);
  if (firstNumber < 0) {
    console.log('Введите число от 0 и выше');
    return;
  }
  if (secondNumber > firstNumber) {
    return Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
  };
  console.log('Второе число должно быть больше чем ' + firstNumber);
  return;
};

getNumber();

function lineLenght(currentLine, maxLine) {
  if (currentLine.length > maxLine) {
    console.log('Ошибка');
    return false;
  }
  console.log('Длина строки не превышена');
  return true;
};

lineLenght();
