// update post function

import { baseApiUrl } from './common.mjs';

const updatePostEndpoint = `${baseApiUrl}/posts/${username}${singlePostId}`;
const testapireqresin = 'https://reqres.in/api/users/2';
const datatest = {
  name: 'morpheus',
  job: 'zion resident',
};
// const updatePost = async (data, api) => {
const updatePost = async (
  singlePostId,
  title,
  body,
  tags,
  mediaUrl,
  mediaAlt
) => {
  const token = localStorage.getItem('token');
  const data = {
    title,
    body,
    tags,
    media: {
      url: mediaUrl,
      alt: mediaAlt,
    },
  };

  const response = await fetch(
    `${baseApiUrl}/posts/${username}${singlePostId}`,
    {
      //   const response = await fetch(`${baseApiUrl}/posts/${username}${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  );
  if (response.ok) {
    const updatedPost = await response.json();
    console.log(updatedPost);
    alert('Post updated successfully');
  } else {
    const error = await response.json();
    console.error(`Error updating post: ${error.message}`);
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

// Dom variables
// const editFormPost = document.querySelector('#edit-form-Post');
// const postTitle = document.querySelector('#post-title');
// const postTags = document.querySelector('#post-tags');
// const postMediaUrl = document.querySelector('#post-media-url');
// const postMediaAlt = document.querySelector('#post-media-alt');
// const postBody = document.querySelector('#post-body');

// editFormPost.addEventListener('submit', e => {
//   e.preventDefault();
//   const postId = editFormPost.dataset.postId;
//   const title = postTitle.value;
//   const tags = postTags.value.split(',');
//   const mediaUrl = postMediaUrl.value;
//   const mediaAlt = postMediaAlt.value;
//   const body = postBody.value;
//   updatePost(postId, title, body, tags, mediaUrl, mediaAlt);
// });
document.addEventListener('DOMContentLoaded', () => {
  const editFormPost = document.querySelector('#edit-form-Post');
  editFormPost.addEventListener('submit', async e => {
    e.preventDefault();
    const postId = editFormPost.dataset.postId;
    const title = postTitle.value;
    const tags = postTags.value.split(',');
    const mediaUrl = postMediaUrl.value;
    const mediaAlt = postMediaAlt.value;
    const body = postBody.value;
    updatePost(postId, title, body, tags, mediaUrl, mediaAlt);
  });
});
