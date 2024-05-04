// import { deletePost } from './common.mjs';
const admin = 'angZar';
import { fetchData } from './common.mjs';
const singlePostId = '00a949dd-8cdf-4b1a-a70c-96701e02b34b';
import { baseApiUrl } from './common.mjs';
const deletePostUrl = `${baseApiUrl}/blog/posts/${admin}/${singlePostId}`;
const token = localStorage.getItem('token');
const bearerToken = `Bearer ${token}`;
const username = localStorage.getItem('name');
console.log(typeof token);
console.log(typeof bearerToken);
// document.addEventListener('DOMContentLoaded', () => {});

// testing reqres succesfull
// const testDeletePost = 'https://reqres.in/api/users/2';

const deletePost = async function (token, postId) {
  const admin = 'angZar';
  const deleteApiUrl = `${baseApiUrl}/blog/posts/${admin}/${postId}`;
  try {
    const res = await fetch(deleteApiUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
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
};

// deletePost(token, singlePostId);
