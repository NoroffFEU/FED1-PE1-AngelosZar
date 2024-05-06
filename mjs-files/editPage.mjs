import { fetchData } from './common.mjs';
import { baseApiUrl } from './common.mjs';
import { allArticles } from './common.mjs';
import { updatePost } from './updatePost.mjs';
import { fetchDataById } from './common.mjs';
// const token = localStorage.getItem('token');
const token = localStorage.getItem('accessToken');
// Form data
const postId = document.querySelector('#post-id');
const editForm = document.querySelector('#edit-form-post');
const postTitle = document.querySelector('#post-title');
const postTags = document.querySelector('#post-tags');
const postImg = document.querySelector('#post-media-url');
const postImgAlt = document.querySelector('#post-media-alt');
const postBody = document.querySelector('#post-body');
const displayPostID = document.querySelector('#editing-post');
//
export async function renderPost() {
  try {
    const { data: posts } = await fetchData(allArticles);
    const cardsContainerEdit = document.querySelector('.cards-container-edit');
    posts.forEach(post => {
      const htmlForPost = `<div class="grid-card">
        <div class="card--image-container">
          <img src="${post.media.url}" alt="${post.media.alt}" />
        </div>
        <div class="card-content">
          <p class="card-title text--grid-card">${post.title}</p>
          <div class="card-info">
            <p class="text--grid-card">${post.id}</p>
          </div>
        </div>
      </div>`;
      cardsContainerEdit.insertAdjacentHTML('beforeend', htmlForPost);
      const gridCard = cardsContainerEdit.lastElementChild;
      gridCard.addEventListener('click', async () => {
        console.log('post id', post.id);
        displayPostID.innerHTML = `You are now editing :<br>${post.title} <br>  <br> With the ID of :`;
        postId.innerHTML = `${post.id}`;
        postTitle.innerHTML = `${post.title}`;
        postTags.innerHTML = `${post.tags}`;
        postImg.innerHTML = `${post.media.url}`;
        postImgAlt.innerHTML = `${post.media.alt}`;
        postBody.innerHTML = `${post.body}`;
      });
      // console.log(token, 'token in renderPost');
    });
    return posts;
  } catch (error) {
    console.error();
    console.log(`error: ${error}`);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  renderPost();
});

editForm.addEventListener('submit', async e => {
  e.preventDefault();
  try {
    const id = document.querySelector('#post-id').textContent;
    const user = localStorage.getItem('name');
    const token = localStorage.getItem('accessToken');
    const url = `https://v2.api.noroff.dev/posts/${user}/${id}`;
    console.log(token, 'token');
    console.log(user, 'user');
    console.log(url, 'url');
    // if all data are shown in console log, then the data is ready to be sent to the API
    // the data is not taken from the input??? why ???
    const data = {
      title: postTitle.value,
      body: postBody.value,
      tags: postTags.value.split(','),
      media: {
        url: postImg.value,
        alt: postImgAlt.value,
      },
    };
    console.log(data);
    console.log(postTitle.value);
    const response = await updatePost(data, url, token);
    console.log(response, 'response');
    if (response.ok) {
      confirm('Post has been updated');
      // editForm.reset();
    } else {
      alert('Post not updated');
      console.log(`error: ${error.message}`);
    }
  } catch (error) {
    console.error(`error: ${error.message}`);
  }
});
