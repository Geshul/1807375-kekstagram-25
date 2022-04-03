function getRandomInteger(firstNumber, secondNumber) {
  const min = Math.ceil(firstNumber);
  const max = Math.floor(secondNumber);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
  while(randomIds.includes(element)) {
    element = getRandomInteger(1,1000);
  }
  randomIds.push(element);
  return element;
}

const showAlert = (message) => {
  const alertContainer = document.querySelector('#alert-container').content.querySelector('.alert-container').cloneNode(true);
  alertContainer.textContent = message;
  document.body.appendChild(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export { getRandomInteger, checkStringMaxLength, getRandomId, showAlert, debounce };
