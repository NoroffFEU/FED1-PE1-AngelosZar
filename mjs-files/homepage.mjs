// imported scripts and variables
import {
  fetchData,
  allArticles,
  devBlogs,
  fetchDataById,
  baseApiUrl,
  clickedPost,
} from './common.mjs';

const token = localStorage.getItem('accessToken');
const username = localStorage.getItem('name') || 'angZar';

// Video on hero
const heroVideoRender = async () => {
  try {
    const heroContainer = document.querySelector('.hero-container');
    const video = document.createElement('video');
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    const source = document.createElement('source');
    source.src =
      'https://videos.pexels.com/video-files/3141207/3141207-uhd_3840_2160_25fps.mp4';
    // source.src =
    //   'https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_30fps.mp4';
    source.type = 'video/mp4';
    video.appendChild(source);
    heroContainer.appendChild(video);
  } catch {
    console.log('Error loading the video');
  }
  // loading spinner ?
};

// trending now section // grid get the first 3 posts with the tag of dev
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

// Most shared article // get post by id
const DisplaySinglePost = async function () {
  try {
    const singlePostId = 'fbb1e2a4-fd52-4617-bf93-20fa87fa3dc1';
    // const username = localStorage.getItem('name') || 'angZar';
    // console.log(username);
    const test1 = `${baseApiUrl}/blog/posts/${username}/${singlePostId}`;
    console.log(test1);
    const mostSharedPostContainer = document.querySelector(
      '.most-shared-single-post'
    );
    const { data: post } = await fetchDataById(test1, token);
    // console.log(post.media.url);
    const sharedPost = `
    <img
      src="${post.media.url}"
      alt="${post.media.alt}"
    />
    <div class="shared-post-overlay">
      <h2>${post.title}</h2>
      <p class="card-author">${post.author.name}</p>
    </div>
      `;
    mostSharedPostContainer.insertAdjacentHTML('beforeend', sharedPost);
    const postOverlay = document.querySelector('.shared-post-overlay');
    postOverlay.addEventListener('click', e => {
      e.preventDefault();
      console.log('click');
      clickedPost(post);
      console.log(post);
    });
  } catch (error) {
    // console.log('error');
    throw new Error(`error) ${error.message}`);
  }
};

// Create html content for the grid
export function genHtmlForGrid(post) {
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

const initHomePage = async () => {
  try {
    const { data: posts } = await fetchData(allArticles);
    displayRecentArticles(posts);
    renderHeroGrid();
    DisplaySinglePost();
  } catch (error) {
    console.error(error);
    console.log('Problem loading the content');
  }
};

// add index.html to the url of homepage
const homepageUrlFunc = function () {
  const homePageUrl = window.location.href;
  console.log(homePageUrl);
  if (homePageUrl.endsWith('app/')) {
    const newUrl = homePageUrl + 'index.html';
    window.location.href = newUrl;
    // else if tha i can work with it on local host
  } else if (homePageUrl.endsWith('/index.html')) {
    console.log('index.html');
    return;
  } else {
    const newUrl = homePageUrl + 'index.html';
    window.location.href = newUrl;
  }
};
// null the submit button on the newsletter form
const submitnewsletterBtn = document.querySelector('#submit-newsletter');
submitnewsletterBtn.addEventListener('click', e => {
  e.preventDefault();
});
//
addEventListener('DOMContentLoaded', () => {
  initHomePage();
  heroVideoRender();
  homepageUrlFunc();
});
