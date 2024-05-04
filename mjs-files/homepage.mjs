// imported variables
import { fetchData } from './common.mjs';
import { baseApiUrl } from './common.mjs';
import { allArticles } from './common.mjs';
import { singlePost } from './common.mjs';
import { singlePostId } from './common.mjs';

export function genHtmlForGrid(post) {
  // card
  const gridCard = document.createElement('div');
  gridCard.classList.add('grid-card');
  gridCard.addEventListener('click', () => {
    clickedPost(post);
  });
  //   card img div
  const cardImgContainer = document.createElement('div');
  cardImgContainer.classList.add('card--image-container');
  //   card img
  const productImg = document.createElement('img');
  //   issue with img
  productImg.src = post.media.url;
  // const altImgText = post.media.alt;
  //   do i have to declare the alt text for img ?
  //   card content
  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');
  const cardTtl = document.createElement('p');
  cardTtl.classList.add('card-title', 'text--grid-card');
  cardTtl.textContent = post.title;
  //   card-info
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  const cardAuthor = document.createElement('p');
  cardAuthor.classList.add('card-author');
  cardAuthor.textContent = post.author.name;
  const tagCategory = document.createElement('p');
  tagCategory.classList.add('text--grid-card');
  tagCategory.textContent = post.tags;
  //   appending
  cardInfo.append(cardAuthor, tagCategory);
  cardContent.append(cardTtl, cardInfo);
  gridCard.append(cardImgContainer, cardContent);
  return gridCard;
}
export function displayRecentArticles(posts) {
  const gridCardsContainer = document.querySelector('.cards-container');
  posts.forEach(post => {
    const gridOfCard = genHtmlForGrid(post);
    gridCardsContainer.appendChild(gridOfCard);
    return gridCardsContainer;
  });
}
export function clickedPost(post) {
  localStorage.setItem('clickedPost', JSON.stringify(post));
  location.href = 'post/index.html';
}
// Rendering homepage
async function main() {
  // 1. check if logged in
  // 2. check if user is admin
  // 3. Async load api data for
  try {
    const { data: posts } = await fetchData(allArticles);
    // functions to render sections here
    //  - hero section extra is not asked in user stories.
    //  - picks of the day //carousel section/
    //  - most recent section / grid of min 12 cards
    displayRecentArticles(posts);
  } catch (error) {
    console.error();
    console.log('Problem loading the content');
  }
}
main();
// document.addEventListener('DOMContentLoaded', () => {
//   //
// });
