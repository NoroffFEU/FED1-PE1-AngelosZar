'use strict';
//                 .....   variables ......
// temporary only for testing
export const admin = 'angZar';
// api url / base + endpoints
export const baseApiUrl = 'https://v2.api.noroff.dev';
export const singlePostId = '73273943-a9ea-4b91-95a5-814dcbba102e';
export const allArticles = `${baseApiUrl}/blog/posts/${admin}`;
export const singlePost = `${baseApiUrl}/blog/posts/${admin}/${singlePostId}`;
// export const deletePost = `${baseApiUrl}/blog/posts/${admin}/${singlePostId}`;
//
export const techBlogs = `${allArticles}?_tag=tech`;
export const trendingBlogs = `${allArticles}?_tag=trending`;
export const devBlogs = `${allArticles}?_tag=dev`;
//

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
export async function fetchDataById(postId) {
  try {
    const res = await fetch(singlePost, {
      method: 'GET',
      Authorization: `Bearer ${userToken}`,
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
// header menu links//
document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('accessToken');
  // const headingMenu = document.querySelector('.menu');
  const aboutUsLink = document.querySelector('.about-us-link');
  const logInLink = document.querySelector('.log-in-link');
  const registerLink = document.querySelector('.register-link');
  const adminLink = document.querySelector('.admin-link');
  const logOutLink = document.querySelector('.log-out-link');
  const techLink = document.querySelector('.tech-link');
  const devLink = document.querySelector('.dev-link');

  if (token) {
    console.log('token:', token);
    logInLink.style.display = 'none';
    aboutUsLink.style.display = 'none';
    techLink.style.display = 'none';
    devLink.style.display = 'none';
  } else {
    registerLink.style.display = 'none';
    adminLink.style.display = 'none';
    logOutLink.style.display = 'none';
  }
});
