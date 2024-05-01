'use strict';
//                 .....   variables ......
export const baseApiUrl = 'https://v2.api.noroff.dev';

// temporary only for testing
export const admin = 'angZar';
export const singlePostId = '73273943-a9ea-4b91-95a5-814dcbba102e';

export const allArticles = `${baseApiUrl}/blog/posts/${admin}`;
export const singlePost = `${baseApiUrl}/blog/posts/${admin}/${singlePostId}`;

//
// fetch async api // get//
export async function fetchData(url) {
  try {
    const res = await axios.get(url);
    // console.log(res.data);
    console.log(res.data);
    return res.data;
    // return res.data.data;
  } catch (error) {
    console.log('error');
    throw new Error(error);
  }
}
