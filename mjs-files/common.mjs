'use strict';
//                 .....   variables ......
export const baseApiUrl = 'https://v2.api.noroff.dev';

// temporary only for testing
export const admin = 'angZar';

export const singlePostId = '73273943-a9ea-4b91-95a5-814dcbba102e';
export const allArticles = `${baseApiUrl}/blog/posts/${admin}`;
export const singlePost = `${baseApiUrl}/blog/posts/${admin}/${singlePostId}`;
export const deletePost = `${baseApiUrl}/blog/posts/${admin}/${singlePostId}`;
export const techBlogs = `${allArticles}?_tag=tech`;
export const trendingBlogs = `${allArticles}?_tag=trending`;
export const devBlogs = `${allArticles}?_tag=dev`;
//
// fetch async api // get//

export async function fetchData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log('data', data);
    return data;
  } catch (error) {
    console.log('error');
    throw new Error(`error) ${error.message}`);
  }
}
// fetch single  post with token // for admin /edit page
export async function fetchDataById(postId) {
  try {
    const res = await fetch(singlePost, {
      method: 'GET',
      Authorization: `Bearer ${userToken}`,
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    console.log('data', data);
    return data;
  } catch (error) {
    console.log('error');
    throw new Error(`error) ${error.message}`);
  }
}
