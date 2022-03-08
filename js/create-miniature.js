import { createPosts } from './create-posts.js';

const list = document.querySelector('.pictures');

const templatePost = document.querySelector('#picture')
  .content;

const posts = createPosts();

const miniatures = document.createDocumentFragment();

posts.forEach(({url, likes, comments}) => {
  const post = templatePost.cloneNode(true);
  post.querySelector('.picture__img').src = url;
  post.querySelector('.picture__likes').textContent = likes;
  post.querySelector('.picture__comments').textContent = comments.length;
  miniatures.append(post);
});

list.append(miniatures);

export { posts };
