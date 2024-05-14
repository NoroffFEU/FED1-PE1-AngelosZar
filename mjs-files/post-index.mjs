import { fetchData, fetchDataById } from './common.mjs';
import { devBlogs } from './common.mjs';
import { admin } from './common.mjs';
import { baseApiUrl } from './common.mjs';
import { singlePostId } from './common.mjs';
import { singlePost } from './common.mjs';

// URL Query Parameters in the Browser test on deployment.
console.log(window.location);
// console.log('keys & values', myURL.searchParams);
// console.log('keys & values', myKeysValues);
const urlTest1 = new URL(window.location);
const urlTest2 = urlTest1.href;
console.log('urlTest1', urlTest1);
console.log('urlTest2', urlTest2);

// const queryParameters = new URLSearchParams(window.location.search);
// const postId = queryParameters.get('id');
//
// console.log(singlePost);

//
//

// const blogContainer = document.querySelector('.focused-blog');

// async function fetchSinglePost() {
//   const userName = localStorage.getItem('name') || 'admin';
//   //   const singlePost = JSON.parse(localStorage.getItem('clickedPost'));
//   const token = localStorage.getItem('accessToken');
//   const singlePostUrl = `${baseApiUrl}${userName}/${postId}`;
//   const singlePostUrl1 = `https://v2.api.noroff.dev/blog/posts/${userName}/${postId}`;
//   console.log(singlePostUrl1);
//   try {
//     await fetchDataById(singlePostUrl1, token);
//     return post;
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchSinglePost();
// const apiUrl = baseApiUrl + '/blog/posts/' + admin + '/' + postId;
const apiUrl = baseApiUrl + '/blog/posts/' + admin;
console.log(apiUrl);

export async function fetchPost(postId) {
  try {
    const response = await fetch(`${apiUrl}/${postId}`);
    const postData = await response.json();
    console.log(postData.data);
    // console.log('postData', data.id);
    return postData;
  } catch (error) {
    console.error('Error fetching post:', error);
  }
}
export async function createQueryUrl(postData) {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.set('id', postData.id); // Add query parameter for id
  urlSearchParams.set('title', postData.title); // Add query parameter for title (optional)
  // ... add more parameters if needed

  const queryUrl = `${window.location.origin}${
    window.location.pathname
  }?${urlSearchParams.toString()}`;
  console.log('queryUrl', queryUrl);
  return queryUrl;
}
fetchPost(singlePostId);
// createQueryUrl(singlePostId);
