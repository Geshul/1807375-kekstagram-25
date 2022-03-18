import { getRandomInteger, getRandomId } from './utils.js';
import { DESCRIPTIONS, MESSAGES, NAMES } from './data.js';

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
    comments: createComments(getRandomInteger(1, 30))
  };
}

function createPosts() {
  const posts = [];
  for (let i = 1; i <= 25; i++) {
    posts.push(createPost(i));
  }
  return posts;
}

export { createPosts };
