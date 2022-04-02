import { createMiniatures } from './create-miniatures.js';
import { getRandomInteger } from './utils.js';
import { createFullscreen } from './create-fullscreen.js';
import { debounce } from './utils.js';

const filterSection = document.querySelector('.img-filters');

function getSort(a, b) {
  return b.comments.length - a.comments.length;
}

function clearMiniatures() {
  document.querySelectorAll('.picture').forEach((picture) => {
    picture.remove();
  });
}

function getRandomPosts() {
  return getRandomInteger(-5, 5);
}

function postSorting(posts, filter) {
  if (filter === 'filter-default') {
    clearMiniatures();
    createMiniatures(posts);
    createFullscreen(posts);
  }
  if (filter === 'filter-random') {
    const randomedPosts = posts.slice().sort(getRandomPosts).slice(0, 10);
    clearMiniatures();
    createMiniatures(randomedPosts);
    createFullscreen(randomedPosts);
  }
  if (filter === 'filter-discussed') {
    const discussedPosts = posts.slice().sort(getSort);
    clearMiniatures();
    createMiniatures(discussedPosts);
    createFullscreen(discussedPosts);
  }}

const onSortButtonClick = debounce(postSorting);

function filterImages(posts) {
  const filterForm = filterSection.querySelector('.img-filters__form');
  filterSection.classList.remove('img-filters--inactive');
  filterForm.addEventListener('click', (evt) => {
    filterForm.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    onSortButtonClick(posts, evt.target.id);
  });
}

export { filterImages };
