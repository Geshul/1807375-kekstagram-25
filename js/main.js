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

function checkStringMaxLength(currentString, maxLength) {
  if (currentString.length > maxLength) {
    return false;
  }
  return true;
}

checkStringMaxLength('Тест', 5);

const DESCRIPTIONS = ['Ну это я','А это не я', 'А это кто?'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Борян', 'Стас', 'Линч', 'Дэвид', 'Клод', 'Валерий', 'Виталямбус'];

const randomIds = [];

function getRandomId() {
  let element = getRandomInteger(1,1000);
  while(randomIds.includes(element)){
    element = getRandomInteger(1,1000);
  }
  randomIds.push(element);
  return element;
}

function createComments(commentsLength) {
  const comments = [];
  for (let i = 0; i < commentsLength;i++) {
    comments.push({
      id: getRandomId(),
      avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
      message: MESSAGES[getRandomInteger(0, MESSAGES.length-1)],
      name: NAMES[getRandomInteger(0, NAMES.length-1)],
    });
  }
  return comments;
}

function createPost(postId) {
  return {
    id: postId,
    url: `photos/${postId}.jpg`,
    description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length-1)],
    likes: getRandomInteger(15, 255),
    comments: createComments(2)
  };
}

function createPosts() {
  const posts = [];
  for (let i = 1; i <= 25; i++) {
    posts.push(createPost(i));
  }
  return posts;
}

createPosts();
