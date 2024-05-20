import { fetchData } from './common.mjs';
import { allArticles } from './common.mjs';
import { clickedPost, genHtmlForGrid } from './homepage.mjs';
// import { genHtmlForGrid } from './homepage.mjs';

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
filterBtnNewer.addEventListener('click', () => {
  // as the newest post is always on top,i just call the   filterAllCategories() function
  filterAllCategories();
});
//

filterBtnOlder.addEventListener('click', () => {
  sortedFiltering();
});
//
//
// Search functionality
const searchOverlay = document.querySelector('#search-overlay');
export const loadSearchResults = async query => {
  try {
    const { data: posts } = await fetchData(allArticles);
    const searchResults = posts.filter(
      post => post.title.toLowerCase().includes(query.toLowerCase())
      //   post.title.toLowerCase().includes(`${quary}`.toLowerCase())
    );
    console.log(searchResults);
    // return searchResults;
    searchResults.forEach(post => {
      const gridOfCard = genHtmlForGrid(post);
      searchOverlay.appendChild(gridOfCard);
      return searchOverlay;
    });
    // let filteredPosts = searchResults;
    //
    // console.log(filteredPosts);

    // filteringPosts(searchResults);
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
};
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
const closeSearchOverlay = document.querySelector('#close-search-overlay');
closeSearchOverlay.addEventListener('click', () => {
  const searchOverlay = document.querySelector('#search-overlay');
  searchOverlay.style.display = 'none';
});
searchBtn.addEventListener('click', () => {
  console.log('click');
  console.log(searchInput.value);
  loadSearchResults(searchInput.value);
  searchOverlay.style.display = 'block';
});
// loadSearchResults('age');
// loadSearchResults('tech');
