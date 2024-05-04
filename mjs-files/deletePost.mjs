// import { deletePost } from './common.mjs';
const admin = 'angZar';
import { fetchData } from './common.mjs';
const singlePostId = '00a949dd-8cdf-4b1a-a70c-96701e02b34b';
import { baseApiUrl } from './common.mjs';
const deletePost = `${baseApiUrl}/blog/posts/${admin}/${singlePostId}`;
// only for test

// const token = JSON.parse(localStorage.getItem('token'));
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjQwZjQwMzQ4MzQzMDAxNzQwZjQzZiIsImlhdCI6MTYxNzYwNjYwMiwiZXhwIjoxNjE3NjA2NjkyfQ.1Z6';
const testDeletePost = 'https://reqres.in/api/users/2';
// console.log(token);
// async function deletePost(url) {
async function deleteAPost(token, url) {
  try {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // const data = await res.json();
    if (res.status === 204) {
      console.log('Post was successfully deleted');
      alert('Post was successfully deleted');
    }
    console.log('data', data);
    return data;
  } catch (error) {
    console.log(`${error.message}`);
    throw new Error(`error) ${error.message}`);
  }
}

deleteAPost(token, deletePost);
