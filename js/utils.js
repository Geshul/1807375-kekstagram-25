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

function checkStringMaxLength(currentString, maxLength) {
  if (currentString.length > maxLength) {
    return false;
  }
  return true;
}

const randomIds = [];

function getRandomId() {
  let element = getRandomInteger(1,1000);
  while(randomIds.includes(element)){
    element = getRandomInteger(1,1000);
  }
  randomIds.push(element);
  return element;
}

export { getRandomInteger, checkStringMaxLength, getRandomId };
