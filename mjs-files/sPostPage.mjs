// Imported scrips and variables
import {
  fetchData,
  allArticles,
  clickedPost,
  showLoader,
  hideLoader,
} from './common.mjs';

const singlePost = JSON.parse(localStorage.getItem('clickedPost'));
const blogContainer = document.querySelector('.focused-blog');

// Display single/clicked post
export async function displaySinglePost(post) {
  showLoader();
  try {
    const clickedPost = `
  <section class="focused-blog">
        <div>
          <div class="focused-blog-info">
            <h5>${post.tags} /</h5>
            <h5>${new Date(post.created).toLocaleDateString('no-NO')} /</h5>
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
    const clickedUrl = document.querySelector('#clicked-url');
    hideLoader();
    clickedUrl.addEventListener('click', () => {
      const currentUrl = window.location.href;
      navigator.clipboard.writeText(currentUrl).then(() => {
        window.confirm('Linked was copied to clipboard');
        return;
      });
    });
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong,\nPlease reload the page');
  }
}

// Recommended section
async function renderRecommendedPosts() {
  let recommended = singlePost.tags;
  // let recommended = [...singlePost.tags];
  try {
    const { data: posts } = await fetchData(allArticles);
    const filteredPosts = posts.filter(post => {
      return post.tags.some(tag => recommended.includes(tag));
    });
    const cardsContainerRecommended = document.querySelector(
      '#cards-container-recommended'
    );
    for (let i = 0; i < 3; i++) {
      const htmlForRecPost = `<div class="grid-card">
      <div class="card--image-container">
      <img src="${filteredPosts[i].media.url}" alt="${
        filteredPosts[i].media.alt
      }" />
      </div>
      <div class="card-content">
        <p class="card-title text--grid-card">${filteredPosts[i].title}</p>
        <p>${new Date(filteredPosts[i].created).toLocaleDateString()} /</p>
            <p class="text--grid-card">${filteredPosts[i].tags}</p>
        </div>
      </div>
    </div>`;
      cardsContainerRecommended.insertAdjacentHTML('beforeend', htmlForRecPost);
      const gridCardRec = cardsContainerRecommended.lastElementChild;
      //
      // 1. How to change content of clicked post on the same page ?
      //
      gridCardRec.addEventListener('click', () => {
        localStorage.clear();
        localStorage.setItem('clickedPost', JSON.stringify(posts[i]));
        const post = JSON.parse(localStorage.getItem('clickedPost'));
        clickedPost(post);
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
    const postId = localStorage.getItem('postId');
    searchParams.set('id', postId);
    let newRelativePathQuery =
      window.location.pathname + '?' + searchParams.toString();
    history.pushState(null, '', newRelativePathQuery);
  }
};

//
document.addEventListener('DOMContentLoaded', () => {
  searchParamsFunction();
  displaySinglePost(singlePost);
  renderRecommendedPosts();
});
