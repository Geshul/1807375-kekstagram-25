const screen = document.querySelector('.big-picture');

function fillComments (comments) {
  const commentTemplate = document.querySelector('#social-comment').content;
  const commentsList = screen.querySelector('.social__comments');
  commentsList.innerHTML = '';
  comments.forEach((commentData) => {
    const comment = commentTemplate.cloneNode(true);
    const commentImg = comment.querySelector('img');
    commentImg.src = commentData.avatar;
    commentImg.alt = commentData.name;
    comment.querySelector('.social__text').textContent = commentData.message;
    commentsList.append(comment);
  });
}

function fillBigPicture (post) {
  const fullPhoto = screen.querySelector('.big-picture__img img');
  const likesCount = screen.querySelector('.likes-count');
  const commentsCount = screen.querySelector('.comments-count');
  const closeBigPicture = document.querySelector('.big-picture__cancel');
  fullPhoto.src = post.url;
  likesCount.textContent = post.likes;
  commentsCount.textContent = post.comments.length;
  fillComments(post.comments);
  screen.classList.remove('hidden');
  closeBigPicture.addEventListener('click', () =>{
    screen.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });
  document.addEventListener('keydown', (evt) =>{
    if(evt.key === 'Escape') {
      screen.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });
}

function createFullscreen(posts) {
  const photo = document.querySelectorAll('.picture');
  for(let i = 0; i < photo.length; i++){
    photo[i].addEventListener('click', (evt) => {
      const postId = evt.target.closest('.picture').dataset.postId;
      fillBigPicture(posts[postId]);
      screen.querySelector('.social__comment-count').classList.add('hidden');
      screen.querySelector('.comments-loader').classList.add('hidden');
      document.body.classList.add('modal-open');
    });
  }
}

export { createFullscreen };
