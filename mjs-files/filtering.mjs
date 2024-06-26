import { fetchData, allArticles, clickedPost } from './common.mjs';
import { genHtmlForGrid } from './homepage.mjs';

// function to filter the data by category
async function filterByCategory(category) {
  const { data: posts } = await fetchData(allArticles);
  const container = document.querySelector('.cards-container');
  container.innerHTML = '';
  const filteredPosts = posts.filter(post => post.tags.includes(category));
  filteringPosts(filteredPosts);
}

// filter by date// old to new
async function sortedFiltering() {
  const { data: posts } = await fetchData(allArticles);
  const container = document.querySelector('.cards-container');
  container.innerHTML = '';
  const filteredPosts = posts.sort(
    (a, b) => new Date(a.created) - new Date(b.created)
  );
  filteringPosts(filteredPosts);
}

// lloping through the data to display the grid
function filteringPosts(filteredPosts) {
  const container = document.querySelector('.cards-container');
  filteredPosts.forEach(post => {
    const gridOfCard = genHtmlForGrid(post);
    container.appendChild(gridOfCard);
  });
}

// filter data all categories // use the allArticles as filtering new to old as well
async function filterAllCategories() {
  const { data: posts } = await fetchData(allArticles);
  const container = document.querySelector('.cards-container');
  container.innerHTML = '';
  const filteredPosts = posts;
  filteringPosts(filteredPosts);
}

// buttons to filter by category tech dev trending crypto
const filterBtnAll = document.querySelector('#filter-btn-all');
const filterBtnTech = document.querySelector('#filter-btn-tech');
const filterBtnDev = document.querySelector('#filter-btn-dev');
const filterBtnTrending = document.querySelector('#filter-btn-trending');
const filterBtnCrypto = document.querySelector('#filter-btn-crypto');
const filterBtnai = document.querySelector('#filter-btn-ai');

// filterBtnAll.addEventListener('click', e => {
//   e.preventDefault();
//   filterAllCategories();
// });

filterBtnTech.addEventListener('click', e => {
  e.preventDefault();
  filterByCategory('tech');
});

filterBtnDev.addEventListener('click', e => {
  e.preventDefault();
  filterByCategory('dev');
});

filterBtnTrending.addEventListener('click', e => {
  e.preventDefault();
  filterByCategory('trending');
});
filterBtnCrypto.addEventListener('click', e => {
  e.preventDefault();
  filterByCategory('crypto');
});
filterBtnai.addEventListener('click', e => {
  e.preventDefault();
  filterByCategory('AI');
});
// filter by date
// data.created
// async function filterByDate() {
//   try {
//     const { data: posts } = await fetchData(allArticles);
//     const newerPosts = posts
//       .sort((a, b) => new Date(a.created) - new Date(b.created))
//       .forEach(post => {
//         // console.log(`Created: ${post.created}`);
//       });
//     const olderPosts = posts
//       .sort((a, b) => new Date(a.created) - new Date(b.created))
//       .forEach(post => {
//         // console.log(`Created: ${post.created}`);
//       });
//     return newerPosts, olderPosts;
//   } catch (error) {
//     console.log(error);
//   }
// }
// filterByDate();

const filterBtnNewer = document.querySelector('#filter-btn_newer');
const filterBtnOlder = document.querySelector('#filter-btn_older');
filterBtnNewer.addEventListener('click', e => {
  e.preventDefault();
  // as the newest post is always on top,i just call the   filterAllCategories() function
  filterAllCategories();
});
//

filterBtnOlder.addEventListener('click', e => {
  e.preventDefault();
  sortedFiltering();
});
