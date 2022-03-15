const upload = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const editForm = document.querySelector('#upload-select-image');
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
  if (hashTags.length > 5 ){
    return false;
  }
  for (let i = 0; i < hashTags.length; i++) {
    if (!hashTags[i].startsWith('#') && value !== ''){
      return false;
    }
    if (hashTags[i].length <= 1 && value !== '')  {
      return false;
    }
    if(checkedHashTags.includes(hashTags[i])){
      return false;
    } else {
      checkedHashTags.push(hashTags[i]);
    }
    if (hashTags[i].length > 20 ) {
      return false;
    }
    if (!hashTags[i].match(regularExpression) && value !== '') {
      return false;
    }
  }
  return true;
}

function validateComment(value) {
  return value.length <= 140;
}

pristine.addValidator (
  editForm.querySelector('.text__hashtags'),
  validateHashtags,
  'Что-то пошло не так'
);

pristine.addValidator (
  editForm.querySelector('.text__description'),
  validateComment,
  'Длина комментария не может составлять больше 140 символов'
);

function openForm() {
  const preview = document.querySelector('.img-upload__preview img');
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  preview.src = upload.value;
  document.querySelector('.img-upload__cancel').addEventListener('click', () =>{
    overlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    editForm.reset();
    pristine.reset();
  });
  document.addEventListener('keydown', (evt) =>{
    if(evt.key === 'Escape') {
      overlay.classList.add('hidden');
      document.body.classList.remove('modal-open');
      editForm.reset();
      pristine.reset();
    }
  });
  document.querySelector('.img-upload__text input').addEventListener('keydown', (evt) =>{
    if(evt.key === 'Escape') {
      evt.stopPropagation();
    }
  });
  document.querySelector('.img-upload__text textarea').addEventListener('keydown', (evt) =>{
    if(evt.key === 'Escape') {
      evt.stopPropagation();
    }
  });
}

function checkValidation()
{
  upload.addEventListener('change', openForm);
  editForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if(pristine.validate()) {
      editForm.submit();
    }
  });
}

export { checkValidation };
