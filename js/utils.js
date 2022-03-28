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

const ALERT_SHOW_TIME = 5000;

function getRandomId() {
  let element = getRandomInteger(1,1000);
  while(randomIds.includes(element)){
    element = getRandomInteger(1,1000);
  }
  randomIds.push(element);
  return element;
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.bottom = 10;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'yellow';
  alertContainer.style.color = 'black';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { getRandomInteger, checkStringMaxLength, getRandomId, showAlert };
