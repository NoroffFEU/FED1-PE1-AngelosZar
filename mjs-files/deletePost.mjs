// import { deletePost } from './common.mjs';
const admin = 'angZar';
import { fetchData } from './common.mjs';
const singlePostId = 'e3d24557-d108-44f3-a68e-f5999bc36a1f';
import { baseApiUrl } from './common.mjs';
// const deletePostUrl = `${baseApiUrl}/blog/posts/${admin}/${singlePostId}`;
// const token = localStorage.getItem('token');
// const bearerToken = `Bearer ${token}`;
const username = localStorage.getItem('name');
// console.log(typeof token);
// console.log(typeof bearerToken);
// document.addEventListener('DOMContentLoaded', () => {});

// testing reqres succesfull
// const testDeletePost = 'https://reqres.in/api/users/2';
console.log('fine');
const deletePost = async function (name, postId) {
  // const name = localStorage.getItem('name');
  const token = localStorage.getItem('accessToken');
  const deleteApiUrl = `https://v2.api.noroff.dev/blog/posts/${name}/${postId}`;
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
    // console.log('data', data);
    // return data;
  } catch (error) {
    console.log(`${error.message}`);
    throw new Error(`error) ${error.message}`);
  }
};

// deletePost(username, singlePostId);
