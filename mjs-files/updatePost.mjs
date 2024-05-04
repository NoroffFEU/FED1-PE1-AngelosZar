// update post function
// work on the username variable
// const username = localStorage.getItem('name');
// console.log(username);
// const updatePostEndpoint = `${baseApiUrl}/posts/${username}${singlePostId}`;

// import { fetchData } from './common.mjs';
// import { genHtmlForGrid } from './homepage.mjs';
// import { displayRecentArticles } from './homepage.mjs';
const testapireqresin = 'https://reqres.in/api/users/2';
const datatest = {
  name: 'morpheus',
  job: 'zion resident',
};
// update async function
export const updatePost = async (data, api) => {
  const response = await fetch(api, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const updatedPost = await response.json();
    console.log(updatedPost);
    alert('Post updated successfully');
  } else {
    const error = await response.json();
    console.error(`Error updating post: ${error.message}`);
    // might change
    alert(error(`Error updating post: ${error.message}`));
  }
};

// updatePost(datatest, testapireqresin);
// Update post
// PUT
// /blog/posts/<name>/<id>
// Update a post based on its id. This endpoint returns the updated post.

// Please note that the media.url property must be a fully formed URL that links to a live and publicly accessible image. The API will check the provided URL and if it cannot be accessed publicly you will receive a 400 Bad Request error response.

// Request

// {
//   "title": "string",
//   "body": "string",
//   "tags": ["string"],
//   "media": {
//     "url": "https://url.com/image.jpg",
//     "alt": "string"
//   }
// }
// document.addEventListener('DOMContentLoaded', () => {
//   const editFormPost = document.querySelector('#edit-form-Post');
//   editFormPost.addEventListener('submit', async e => {
//     e.preventDefault();
//     const postId = editFormPost.dataset.postId;
//     const title = postTitle.value;
//     const tags = postTags.value.split(',');
//     const mediaUrl = postMediaUrl.value;
//     const mediaAlt = postMediaAlt.value;
//     const body = postBody.value;
//     updatePost(postId, title, body, tags, mediaUrl, mediaAlt);
//   });
// });
