// Imported scripts and variables
import { fetchData, baseApiUrl, allArticles, admin } from './common.mjs';
import { updatePost, createNewPost } from './updatePost.mjs';
import { deletePost } from './deletePost.mjs';

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
let displayPostID = document.querySelector('#editing-post');
const btnDeletePost = document.querySelector('.btn-delete-post');

//
export async function renderPost() {
  try {
    const { data: posts } = await fetchData(allArticles);
    const cardsContainerEdit = document.querySelector('#cards-container-edit');
    posts.forEach(post => {
      const htmlForPost = `<div class="grid-card">
        <div class="card--image-container">
          <img src="${post.media.url}" alt="${post.media.alt}" />
        </div>
        <div class="card-content">
          <p class="card-title text--grid-card">${post.title}</p>
          <div class="card-info">
            <p class="text--grid-card">${new Date(
              post.created
            ).toLocaleDateString()}</p>
          </div>
        </div>
      </div>`;
      cardsContainerEdit.insertAdjacentHTML('beforeend', htmlForPost);
      const gridCard = cardsContainerEdit.lastElementChild;
      gridCard.addEventListener('click', async () => {
        editForm.reset();
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
  }
}
const clearEditForm = function () {
  postId.innerHTML = '';
  displayPostID.innerHTML = '';
  postTitle.value = '';
  postTags.value = '';
  postImg.value = '';
  postImgAlt.value = '';
  postBody.value = '';
};

editForm.addEventListener('submit', async e => {
  e.preventDefault();
  const userName = localStorage.getItem('name') || admin;
  try {
    const id = document.querySelector('#post-id').textContent;
    const url = `${baseApiUrl}/blog/posts/${userName}/${id}`;
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
    }
  } catch (error) {
    console.error(`error: ${error.message}`);
  }
});

// event listener to delete an article
btnDeletePost.addEventListener('click', async e => {
  e.preventDefault();
  const id = document.querySelector('#post-id').textContent;
  alert('Are you sure you want to delete this post?');
  deletePost(id);
});

const clearForm = document.querySelector('.clear-form-for-edit');
clearForm.addEventListener('click', e => {
  e.preventDefault();
  clearEditForm();
});
//

// create a new post
const createNPostBtn = document.querySelector('#create-post-btn');
createNPostBtn.addEventListener('click', async e => {
  e.preventDefault();
  try {
    const userName = localStorage.getItem('name') || admin;
    const url = `${allArticles}`;
    const token = localStorage.getItem('accessToken');
    const data = {
      title: postTitle.value,
      body: postBody.value,
      tags: postTags.value.split(','),
      media: {
        url: postImg.value,
        alt: postImgAlt.value,
      },
    };
    const response = await createNewPost(data, url, token);
    if (response.ok) {
      confirm('Post has been created');
    } else {
      alert('Post not created');
    }
  } catch (error) {
    console.error(`error: ${error.message}`);
  }
});

renderPost();
