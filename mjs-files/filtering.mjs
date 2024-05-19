import { fetchData } from './common.mjs';
import { allArticles } from './common.mjs';
import { genHtmlForGrid } from './homepage.mjs';

// filter data all categories
async function filterAllCategories(category) {
  const { data: posts } = await fetchData(allArticles);
  //   const { data } = await fetchData(allArticles);
  console.log('posts', posts);
  const container = document.querySelector('.cards-container');
  container.innerHTML = '';
  const filteredPosts = posts;
  console.log('filteredPosts', filteredPosts);
}

// filterAllCategories();

// buttons to filter by category tech dev trending crypto
const filterBtnAll = document.querySelector('#filter-btn-all');
const filterBtnTech = document.querySelector('#filter-btn-tech');
const filterBtnDev = document.querySelector('#filter-btn-dev');
const filterBtnTrending = document.querySelector('#filter-btn-trending');
const filterBtnCrypto = document.querySelector('#filter-btn-crypto');

filterBtnAll.addEventListener('click', e => {
  filterAllCategories();
});

filterBtnTech.addEventListener('click', e => {});

filterBtnTech.addEventListener('click', e => {
  e.preventDefault();
});

filterBtnDev.addEventListener('click', e => {
  e.preventDefault();
});

filterBtnTrending.addEventListener('click', e => {
  e.preventDefault();
});
filterBtnCrypto.addEventListener('click', e => {
  e.preventDefault();
});
