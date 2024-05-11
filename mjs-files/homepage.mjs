// imported scripts and variables
import { fetchData } from './common.mjs';
import { allArticles } from './common.mjs';
import { devBlogs } from './common.mjs';
import { logOut } from './logOut.mjs';

const token = localStorage.getItem('accessToken');
const username = localStorage.getItem('name');
// console.log(username);

// Create html content for the grid
function genHtmlForGrid(post) {
  const gridCard = document.createElement('div');
  gridCard.classList.add('grid-card');
  gridCard.addEventListener('click', () => {
    clickedPost(post);
  });
  const cardImgContainer = document.createElement('div');
  cardImgContainer.classList.add('card--image-container');
  const productImg = document.createElement('img');
  productImg.src = post.media.url;
  const altImgText = document.createAttribute('alt');
  altImgText.value = post.media.alt;
  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');
  const cardTtl = document.createElement('p');
  cardTtl.classList.add('card-title', 'text--grid-card');
  cardTtl.textContent = post.title;
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  const cardAuthor = document.createElement('p');
  cardAuthor.classList.add('card-author');
  cardAuthor.textContent = post.author.name;
  const tagCategory = document.createElement('p');
  tagCategory.classList.add('text--grid-card');
  tagCategory.textContent = post.tags;
  cardImgContainer.append(productImg);
  cardInfo.append(cardAuthor, tagCategory);
  cardContent.append(cardTtl, cardInfo);
  gridCard.append(cardImgContainer, cardContent);
  return gridCard;
}
// Display the recent articles grid on the homepage
function displayRecentArticles(posts) {
  const gridCardsContainer = document.querySelector('.cards-container');
  posts.forEach(post => {
    const gridOfCard = genHtmlForGrid(post);
    gridCardsContainer.appendChild(gridOfCard);
    return gridCardsContainer;
  });
}
//Function to store the clicked post in local storage
export function clickedPost(post) {
  localStorage.setItem('clickedPost', JSON.stringify(post));
  location.href = 'post/index.html';
}

// For  trending now section Grid
async function renderHeroGrid() {
  try {
    const { data: posts } = await fetchData(devBlogs);
    const cardsContainerEdit = document.querySelector('.hero-cards-container');
    for (let i = 0; i < 3; i++) {
      const htmlForPost = `<div class="hero-grid-card">
        <div class="hero-card--image-container">
          <img src="${posts[i].media.url}" alt="${posts[i].media.alt}" />
        </div>
        <div class="card-content">
          <p class="card-title text--grid-card">${posts[i].title}</p>
          <div class="card-info">
            <p>${new Date(posts[i].created).toLocaleDateString()} /</p>
            <p class="text--grid-card">${posts[i].tags}</p>
          </div>
        </div>
      </div>`;
      cardsContainerEdit.insertAdjacentHTML('beforeend', htmlForPost);
      const heroGridCard = cardsContainerEdit.lastElementChild;
      heroGridCard.addEventListener('click', () => {
        clickedPost(posts[i]);
      });
    }
    return posts;
  } catch (error) {
    console.error('Error:', error);
  }
}
const initHomePage = async () => {
  try {
    const { data: posts } = await fetchData(allArticles);
    displayRecentArticles(posts);
    renderHeroGrid();
  } catch (error) {
    console.error(error);
    console.log('Problem loading the content');
  }
};
initHomePage();
//
//
//
