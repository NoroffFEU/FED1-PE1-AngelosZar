'use strict';
//                 .....   variables ......
// testing and fallback
export const admin = 'angZar';
// api url / base + endpoints
export const baseApiUrl = 'https://v2.api.noroff.dev';
export const singlePostId = 'fbb1e2a4-fd52-4617-bf93-20fa87fa3dc1';
export const allArticles = `${baseApiUrl}/blog/posts/${admin}`;
export const singlePost = `${baseApiUrl}/blog/posts/${admin}/${singlePostId}`;
export const techBlogs = `${allArticles}?_tag=tech`;
export const trendingBlogs = `${allArticles}?_tag=trending`;
export const devBlogs = `${allArticles}?_tag=dev`;
//
import { logOut } from './logOut.mjs';

// fetch async api // get//
export async function fetchData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    // console.log('error');
    throw new Error(`error) ${error.message}`);
  }
}
// fetch // get single post with token // for admin /edit page
export async function fetchDataById(singlePostUrl, token) {
  try {
    const res = await fetch(singlePostUrl, {
      method: 'GET',
      Authorization: `Bearer ${token}`,
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    // console.log('data', data);
    return data;
  } catch (error) {
    // console.log('error');
    throw new Error(`error) ${error.message}`);
  }
}
//Function to store the clicked post in local storage
export function clickedPost(post) {
  const postId = post.id;
  localStorage.setItem('clickedPost', JSON.stringify(post));
  localStorage.setItem('postId', postId);
  // const myUrl = new URL(window.location.href);
  location.href = '/post/index.html';
}

// header menu links//
document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('accessToken');
  // const headingMenu = document.querySelector('.menu');
  const aboutUsLink = document.querySelector('.about-link');
  const logInLink = document.querySelector('.log-in-link');
  const registerLink = document.querySelector('.register-link');
  const adminLink = document.querySelector('.admin-link');
  const logOutLink = document.querySelector('.log-out-link');
  // const devLink = document.querySelector('.dev-link');
  const searchBar = document.querySelector('#search-input-span');
  urlFunc();
  logOutLink.addEventListener('click', () => {
    logOut();
    // loadSearchResults();
  });

  if (token) {
    logInLink.style.display = 'none';
    aboutUsLink.style.display = 'none';
    searchBar.style.display = 'none';
  } else {
    registerLink.style.display = 'none';
    adminLink.style.display = 'none';
    logOutLink.style.display = 'none';
  }
});
// fetchDataById(singlePost, token);
//
const overlayPopUp = document.querySelector('#overlay-pop-up'); // loadSearchResults('age');
overlayPopUp.classList.add('.search-overlay-pop-up');
const searchOverlay = document.querySelector('#search-overlay');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
const closeSearchOverlay = document.querySelector('#close-search-overlay');
let overlayPopUpHeading = document.querySelector('#overlay-pop-up-heading');

export const loadSearchResults = async query => {
  try {
    const { data: posts } = await fetchData(allArticles);
    const searchResults = posts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    console.log(searchResults);
    const querySearch = query;
    console.log(querySearch);
    searchResults.forEach(post => {
      const htmlForPost = `
      <div class="grid-card">
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
      overlayPopUp.insertAdjacentHTML('beforeend', htmlForPost);
      const heroGridCard = overlayPopUp.lastElementChild;
      if (searchResults.length === 0) {
        overlayPopUpHeading.textContent = `Search results for ''${querySearch}'' .We couldn't find any articles matching your search.`;
      } else if (!searchInput.value) {
        overlayPopUpHeading.textContent = `Please insert a search term to get results.`;
        // overlayPopUp.innerHTML = '';
        // overlayPopUp.innerHTML = `<h1>Nothing to show <h1>`;
      } else {
        overlayPopUpHeading.textContent = `Search results for ''${querySearch}'' .
      Your search matched ${searchResults.length} articles`;
      }
      heroGridCard.addEventListener('click', async () => {
        clickedPost(post);
      });
      return overlayPopUp;
    });
  } catch (error) {
    console.error(`Error: ${error}`);
    alert('An error occured while loading the data');
    throw error;
  }
};

// search btn
searchBtn.addEventListener('click', () => {
  console.log('click');
  console.log(searchInput.value);
  loadSearchResults(searchInput.value);
  searchOverlay.style.display = 'block';
});

// close search overlay
closeSearchOverlay.addEventListener('click', () => {
  const searchOverlay = document.querySelector('#search-overlay');
  searchOverlay.style.display = 'none';
  searchInput.value = '';
  overlayPopUp.innerHTML = '';
});
searchOverlay.style.display = 'none';

export const urlFunc = function () {
  const currentUrl = window.location.href;
  console.log(currentUrl);
  if (currentUrl.endsWith('app/')) {
    const newUrl = currentUrl + 'index.html';
    window.location.href = newUrl;
    // else if tha i can work with it on local host
  } else if (currentUrl.endsWith('/index.html')) {
    return;
  } else if (!currentUrl.endsWith('.html')) {
    const newUrl = currentUrl + '.html';
    console.log(newUrl);
    window.location.href = newUrl;
  }
};
