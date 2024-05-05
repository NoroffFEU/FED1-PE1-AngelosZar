import { fetchData } from './common.mjs';
import { devBlogs } from './common.mjs';

const singlePost = JSON.parse(localStorage.getItem('clickedPost'));
console.log(singlePost);
const blogContainer = document.querySelector('.focused-blog');

function displaySinglePost(post) {
  const clickedPost = `
  <section class="focused-blog">
        <div>
          <div class="focused-blog-info">
            <h5>${post.tags} /</h5>
            <h5>${new Date(post.created).toLocaleDateString()} /</h5>
            <h5>${post.author.name} /</h5>
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
  //   blogContainer.appendChild(clickedPost);
  blogContainer.insertAdjacentHTML('beforeend', clickedPost);
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
        // displaySinglePost(singlePost);
        // renderRecommendedPosts();
        // setInterval();
        // location.reload();
        // location.href = 'post/index.html';
        // window.location.href = 'post/index.html';
      });
    }
    return posts;
  } catch (error) {
    console.error('Error:', error);
  }
}
displaySinglePost(singlePost);
renderRecommendedPosts();
// document.addEventListener('DOMContentLoaded', () => {
