import { createPosts } from './create-posts.js';
import { createMiniatures } from './create-miniatures.js';
import { createFullscreen } from './create-fullscreen.js';
import { checkValidation } from './check-validation.js';

const posts = createPosts();
createMiniatures(posts);
createFullscreen(posts);
checkValidation();
