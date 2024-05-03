import { fetchData } from './common.mjs';

const singlePost = JSON.parse(localStorage.getItem('clickedPost'));
console.log(singlePost);
const blogContainer = document.querySelector('.focused-blog');

function displaySinglePost(post) {
  const clickedPost = `
  <section class="focused-blog">
        <div>
          <div class="focused-blog-info">
            <h5>${post.tags} /</h5>
            <h5>${post.created} /</h5>
            <h5>${post.author} /</h5>
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
displaySinglePost(singlePost);
// document.addEventListener('DOMContentLoaded', () => {
