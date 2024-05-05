import { fetchData } from './common.mjs';
import { baseApiUrl } from './common.mjs';
import { allArticles } from './common.mjs';
import { updatePost } from './updatePost.mjs';
import { fetchDataById } from './common.mjs';

async function renderPost() {
  try {
    const { data: posts } = await fetchData(allArticles);
    // functioning
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
      });
    });
    return posts;
    // functioning
  } catch (error) {
    console.error();
    console.log(`error: ${error}`);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  renderPost();
});
