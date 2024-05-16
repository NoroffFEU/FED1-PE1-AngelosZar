// Imported scrips and variables
import { fetchData } from './common.mjs';
import { devBlogs } from './common.mjs';
import { admin } from './common.mjs';
const userName = localStorage.getItem('name');
const token = localStorage.getItem('accessToken');

//
//
const singlePost = JSON.parse(localStorage.getItem('clickedPost'));
console.log(singlePost);
const blogContainer = document.querySelector('.focused-blog');

export async function displaySinglePost(post) {
  try {
    const clickedPost = `
  <section class="focused-blog">
        <div>
          <div class="focused-blog-info">
            <h5>${post.tags} /</h5>
            <h5>${new Date(post.created).toLocaleDateString()} /</h5>
            <h5>${post.author.name} /</h5>
            <button class="primary-button" id="clicked-url">Copy link</button>
          </div>
          <h1>${post.title}</h1>
          <div class="focused-blog-info-img-container">
          <img src="${post.media.url}" alt="${post.media.alt}" />
        </div>
        </div>
        <article class="focused-blog-article">
          <p>${post.body}</p>
        </article>
      </section>
      `;
    blogContainer.insertAdjacentHTML('beforeend', clickedPost);
    // click to copy the url
    const clickedUrl = document.querySelector('#clicked-url');
    clickedUrl.addEventListener('click', () => {
      const currentUrl = window.location.href;
      // const postId = queryParameters.get('id');
      navigator.clipboard.writeText(currentUrl).then(() => {
        // navigator.clipboard.writeText(`${currentUrl}+${postId}`).then(() => {
        window.confirm('Linked was copied to clipboard');
        return;
      });
    });
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong,\nPlease reload the page');
  }
}
async function renderRecommendedPosts() {
  try {
    const { data: posts } = await fetchData(devBlogs);
    console.log(posts);
    const cardsContainerRecommended = document.querySelector(
      '#cards-container-recommended'
    );
    for (let i = 0; i < 3; i++) {
      const htmlForRecPost = `<div class="grid-card">
      <div class="card--image-container">
      <img src="${posts[i].media.url}" alt="${posts[i].media.alt}" />
      </div>
      <div class="card-content">
        <p class="card-title text--grid-card">${posts[i].title}</p>
        <p>${new Date(posts[i].created).toLocaleDateString()} /</p>
            <p class="text--grid-card">${posts[i].tags}</p>
        </div>
      </div>
    </div>`;
      cardsContainerRecommended.insertAdjacentHTML('beforeend', htmlForRecPost);
      const gridCardRec = cardsContainerRecommended.lastElementChild;
      //
      // 1. How to change content of clicked post on the same page ?
      //
      gridCardRec.addEventListener('click', () => {
        console.log(posts[i]);
        localStorage.clear();
        localStorage.setItem('clickedPost', JSON.stringify(posts[i]));
        console.log(localStorage.getItem('clickedPost'));
      });
    }
    return posts;
  } catch (error) {
    console.error('Error:', error);
  }
}

//  function to create quarry string based on post id
const searchParamsFunction = () => {
  if ('URLSearchParams' in window) {
    let searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams);
    const postId = localStorage.getItem('postId');
    searchParams.set('id', postId);
    console.log(window.location.search);
    let newRelativePathQuery =
      window.location.pathname + '?' + searchParams.toString();
    history.pushState(null, '', newRelativePathQuery);
  } else {
    console.log('URLSearchParams is not found');
  }
};
document.addEventListener('DOMContentLoaded', () => {
  searchParamsFunction();
  displaySinglePost(singlePost);
  renderRecommendedPosts();
});
