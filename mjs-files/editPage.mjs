// Imported scripts and variables
import { fetchData } from './common.mjs';
import { baseApiUrl } from './common.mjs';
import { allArticles } from './common.mjs';
import { updatePost } from './updatePost.mjs';
import { fetchDataById } from './common.mjs';
import { deletePost } from './deletePost.mjs';
import { admin } from './common.mjs';

// credentials
const token = localStorage.getItem('accessToken');
const userName = localStorage.getItem('name') || admin;
// Form data
const postId = document.querySelector('#post-id');
const editForm = document.querySelector('#edit-form-post');
const postTitle = document.querySelector('#post-title');
const postTags = document.querySelector('#post-tags');
const postImg = document.querySelector('#post-media-url');
const postImgAlt = document.querySelector('#post-media-alt');
const postBody = document.querySelector('#post-body');
const displayPostID = document.querySelector('#editing-post');
const btnDeletePost = document.querySelector('.btn-delete-post');

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
  const userName = localStorage.getItem('name') || admin;
  try {
    const id = document.querySelector('#post-id').textContent;
    // const userName = localStorage.getItem('name') || admin;
    // There is a bug here, the username  is not taken from the input
    // const token = localStorage.getItem('accessToken');
    // for some reason the user var is not working...
    // const url = `https://v2.api.noroff.dev/posts/${admin}/${id}`;
    // const url = `${baseApiUrl}/${userName}/${id}`;
    const url = `${allArticles}/${id}`;
    const data = {
      title: postTitle.value,
      body: postBody.value,
      tags: postTags.value.split(','),
      media: {
        url: postImg.value,
        alt: postImgAlt.value,
      },
    };
    const response = await updatePost(data, url, token);
    if (response.ok) {
      confirm('Post has been updated');
    } else {
      alert('Post not updated');
      console.log(`error: ${error.message}`);
    }
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
});

// event listener to delete an article
btnDeletePost.addEventListener('click', async e => {
  e.preventDefault();
  const id = document.querySelector('#post-id').textContent;
  alert('Are you sure you want to delete this post?');
  deletePost(id);
});
