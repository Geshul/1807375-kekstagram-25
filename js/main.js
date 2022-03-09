import { createPosts } from './create-posts.js';
import { createMiniatures } from './create-miniatures.js';

const posts = createPosts();
createMiniatures(posts);
