import { fetchData } from './common.mjs';
import { baseApiUrl } from './common.mjs';
import { updatePost } from './updatePost.mjs';

//
//
//
function renderPost() {
  fetchData(`${baseApiUrl}/posts`);
  const cardsContainer = document.querySelector('.cards-container');
  array.forEach(post => {
    htmlForPost = `<div class="grid-card">
    <div class="card--image-container">
      <img
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="img placeholder"
      />
    </div>
    <div class="card-content">
      <p class="card-title text--grid-card">title of article</p>
      <div class="card-info">
        <p class="text--grid-card">id</p>
      </div>
    </div>
  </div>`;
  });
  cardsContainer.insertAdjacentHTML('beforeend', clickedPost);
}
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
