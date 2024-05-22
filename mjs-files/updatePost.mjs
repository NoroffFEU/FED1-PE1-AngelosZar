const token = localStorage.getItem('accessToken');

// update  a post async function
export const updatePost = async (data, api, token) => {
  try {
    const response = await fetch(api, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify({ data }),
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const updatedPost = await response.json();
      confirm('Post updated successfully');
      setTimeout(window.location.reload(), 2500);
    } else {
      const error = await response.json();
      console.error(`Error updating post: ${error.message}`);
      alert(`Error updating post: ${error.message}`);
    }
  } catch (error) {
    console.error(`Error updating post: ${error.message}`);
    alert(`Error updating post: ${error.message}`);
  }
};

// create a post async function
export const createNewPost = async (data, api, token) => {
  try {
    const response = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const newPost = await response.json();
      confirm('Post created successfully');
      setTimeout(window.location.reload(), 2500);
    } else {
      const error = await response.json();
      console.error(`Error creating post: ${error.message}`);
      alert(`Error creating post: ${error.message}`);
    }
  } catch (error) {
    console.error(`Error creating post: ${error.message}`);
    alert(`Error creating post: ${error.message}`);
  }
};
