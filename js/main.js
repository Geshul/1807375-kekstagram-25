import { createPosts } from './create-posts.js';
import { createMiniatures } from './create-miniatures.js';
import { createFullscreen } from './create-fullscreen.js';
import { initFormValidation,initFormOpenClose } from './check-validation.js';

const posts = createPosts();
createMiniatures(posts);
createFullscreen(posts);
initFormValidation();
initFormOpenClose();
