// imported variables
import { fetchData } from './common.mjs';
import { baseApiUrl } from './common.mjs';
import { allArticles } from './common.mjs';
import { singlePost } from './common.mjs';
import { singlePostId } from './common.mjs';

//all posts
fetchData(allArticles);
// single post by id
fetchData(baseApiUrl, singlePostId);
