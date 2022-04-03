import { clearEffect, imagePreview } from './form-sliders.js';
import { sendData } from './api.js';

const upload = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const editForm = document.querySelector('#upload-select-image');
const submitButton = editForm.querySelector('.img-upload__submit');
const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Загрузка...';
};
const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};
const pristine = new Pristine(editForm, {
  classTo: 'img-upload__item',
  errorClass: 'img-upload__item--invalid',
  successClass: 'img-upload__item--valid',
  errorTextParent: 'img-upload__item',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
});

function validateHashtags(value) {
  let hashTags = value.split(' ');
  hashTags = hashTags.map((element) => element.toLowerCase());
  const checkedHashTags = [];
  const regularExpression = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;
  if (hashTags.length > 5) {
    return false;
  }
  for (let i = 0; i < hashTags.length; i++) {
    if ((!hashTags[i].startsWith('#') && value !== '') ||
    (hashTags[i].length <= 1 && value !== '') ||
    hashTags[i].length > 20 ||
    (!hashTags[i].match(regularExpression) && value !== '')) {
      return false;
    }
    if (checkedHashTags.includes(hashTags[i])) {
      return false;
    } else {
      checkedHashTags.push(hashTags[i]);
    }
  }
  return true;
}

function validateComment(value) {
  return value.length <= 140;
}

function closeForm() {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  editForm.reset();
  pristine.reset();
  document.getElementById('effect-none').checked = true;
  clearEffect();
  imagePreview.style.transform = '';
}

function initFormOpenClose() {
  upload.addEventListener('change', openForm);
  document.querySelector('.img-upload__cancel').addEventListener('click', closeForm);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closeForm();
    }
  });
  document.querySelector('.img-upload__text input').addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
    }
  });
  document.querySelector('.img-upload__text textarea').addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
    }
  });
}

function uploadPreview(image) {
  const FILE_TYPES = ['jpg', 'jpeg', 'png'];
  const preview = document.querySelector('.img-upload__preview img');
  const file = image.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
}

function openForm() {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  uploadPreview(this);
}

function initFormValidation() {
  pristine.addValidator(
    editForm.querySelector('.text__hashtags'),
    validateHashtags,
    'Что-то пошло не так'
  );

  pristine.addValidator(
    editForm.querySelector('.text__description'),
    validateComment,
    'Длина комментария не может составлять больше 140 символов'
  );
}

function showPopupMessage(type) {
  const message = document.querySelector(`#${type}`).content.querySelector(`.${type}`).cloneNode(true);
  const messageWrapper = message.querySelector(`.${type}__inner`);
  const button = messageWrapper.querySelector(`.${type}__button`);
  button.addEventListener('click', () => {
    message.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      message.remove();
    }
  });
  document.addEventListener('click', (evt) => {
    const withinBoundaries = evt.composedPath().includes(messageWrapper);
    if ( ! withinBoundaries ) {
      message.remove();
    }
  });
  document.body.appendChild(message);
}

const initFormSubmit = (onSuccess) =>  {
  editForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          showPopupMessage('success');
        },
        () => {
          unblockSubmitButton();
          showPopupMessage('error');
          closeForm();
        },
        new FormData(evt.target),
      );
    }
  });
};

export { initFormValidation,initFormOpenClose, initFormSubmit, closeForm };
