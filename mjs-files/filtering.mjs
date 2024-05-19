import { fetchData } from './common.mjs';
import { allArticles } from './common.mjs';
import { genHtmlForGrid } from './homepage.mjs';

// function to filter the data by category
async function filterByCategory(category) {
  const { data: posts } = await fetchData(allArticles);
  const container = document.querySelector('.cards-container');
  container.innerHTML = '';
  const filteredPosts = posts.filter(post => post.tags.includes(category));
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

// filter data all categories
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

filterBtnAll.addEventListener('click', () => {
  filterAllCategories();
});

filterBtnTech.addEventListener('click', () => {
  filterByCategory('tech');
});

filterBtnDev.addEventListener('click', () => {
  filterByCategory('dev');
});

filterBtnTrending.addEventListener('click', () => {
  filterByCategory('trending');
});
filterBtnCrypto.addEventListener('click', () => {
  filterByCategory('crypto');
});

// filter by date
// data.created

async function filterByDate() {
  try {
    const { data: posts } = await fetchData(allArticles);
    // console.log(posts);
    // console.log(posts.sort((a, b) => new Date(a.created) - new Date(b.created)));
    // const qwe = posts.sort((a, b) => new Date(a.created) - new Date(b.created));
    // const qwe = posts.sort((a, b) => b.created - a.created);
    // console.log(qwe);
    const newerPosts = posts
      .sort((a, b) => new Date(a.created) - new Date(b.created))
      .forEach(post => {
        // console.log(`Created: ${post.created}`);
      });
    const olderPosts = posts
      .sort((a, b) => new Date(a.created) - new Date(b.created))
      .forEach(post => {
        // console.log(`Created: ${post.created}`);
      });
    return newerPosts, olderPosts;
  } catch (error) {
    console.log(error);
  }
}
filterByDate();
