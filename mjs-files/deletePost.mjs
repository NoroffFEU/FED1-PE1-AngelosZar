// Delete post function
export const deletePost = async function (postId) {
  const token = localStorage.getItem('accessToken');
  const name = localStorage.getItem('name');
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
      setTimeout(window.location.reload(), 2500);
    }
  } catch (error) {
    console.log(`${error.message}`);
    throw new Error(`error) ${error.message}`);
  }
};
