// imported scripts and variables
import {
  fetchData,
  allArticles,
  devBlogs,
  fetchDataById,
  baseApiUrl,
  clickedPost,
  showLoader,
  hideLoader,
} from './common.mjs';

const token = localStorage.getItem('accessToken');
const username = localStorage.getItem('name') || 'angZar';

// Video on hero
const heroVideoRender = async () => {
  try {
    const heroContainer = document.querySelector('.hero-container');
    const loadingSpinner = document.createElement('div');
    loadingSpinner.classList.add('loader');
    heroContainer.appendChild(loadingSpinner);
    const video = document.createElement('video');
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    const source = document.createElement('source');
    source.src =
      'https://videos.pexels.com/video-files/3141207/3141207-uhd_3840_2160_25fps.mp4';
    // source.src =
    // 'https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_30fps.mp4';
    // source.src =
    //   'https://videos.pexels.com/video-files/3130284/3130284-uhd_3840_2160_30fps.mp4';
    https: source.type = 'video/mp4';
    video.appendChild(source);
    video.addEventListener('loadeddata', () => {
      loadingSpinner.style.display = 'none';
    });
    heroContainer.appendChild(video);
  } catch {
    console.log('Error loading the video');
  }
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
const displaySinglePost = async function () {
  showLoader();
  try {
    const singlePostId = 'c2de51ab-aed3-44b5-9f1e-d67a7d0d70bc';
    const test1 = `${baseApiUrl}/blog/posts/${username}/${singlePostId}`;
    const mostSharedPostContainer = document.querySelector(
      '.most-shared-single-post'
    );
    const { data: post } = await fetchDataById(test1, token);
    const sharedPost = `
    <img
      src="${post.media.url}"
      alt="${post.media.alt}"
    />
    <div class="shared-post-overlay">
      <h3>${post.title}</h3>
      <p class="card-author">${post.author.name}</p>
    </div>
      `;
    mostSharedPostContainer.insertAdjacentHTML('beforeend', sharedPost);
    hideLoader();
    const postOverlay = document.querySelector('.shared-post-overlay');
    postOverlay.addEventListener('click', e => {
      e.preventDefault();
      clickedPost(post);
    });
  } catch (error) {
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
  productImg.setAttributeNode(altImgText);
  cardImgContainer.append(productImg);
  cardInfo.append(cardAuthor, tagCategory);
  cardContent.append(cardTtl, cardInfo);
  gridCard.append(cardImgContainer, cardContent);
  return gridCard;
}

// Display the recent articles grid on the homepage
function displayRecentArticles(posts) {
  const gridCardsContainer = document.querySelector('.cards-container');
  const displayedPostIds = new Set();
  posts.forEach(post => {
    if (!displayedPostIds.has(post.id)) {
      const gridCard = genHtmlForGrid(post);
      gridCardsContainer.appendChild(gridCard);
      displayedPostIds.add(post.id);
    }
  });
}

let page = 1;
const limit = 6;
const initHomePage = async () => {
  try {
    const paginatedData = `${baseApiUrl}/blog/posts/${username}?limit=${limit}&page=${page}`;
    const { data: posts } = await fetchData(paginatedData);
    displayRecentArticles(posts);
    return posts;
  } catch (error) {
    console.error(error);
    console.log('Problem loading the content');
  }
};

const showMoreBtn = document.querySelector('.show-more-btn');
showMoreBtn.addEventListener('click', () => {
  page += 1;
  initHomePage();
});
// null the submit button on the newsletter form
const submitnewsletterBtn = document.querySelector('#submit-newsletter');
submitnewsletterBtn.addEventListener('click', e => {
  e.preventDefault();
});

//
document.addEventListener('DOMContentLoaded', () => {
  initHomePage();
  heroVideoRender();
  renderHeroGrid();
  displaySinglePost();
});
