const username = localStorage.getItem('name');
const deletePost = async function (name, postId) {
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
