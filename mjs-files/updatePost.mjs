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
      // console.log(updatedPost);
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

// updatePost(datatest, testapireqresin);
// Update post
// PUT
// /blog/posts/<name>/<id>
// Update a post based on its id. This endpoint returns the updated post.

// Please note that the media.url property must be a fully formed URL that links to a live and publicly accessible image. The API will check the provided URL and if it cannot be accessed publicly you will receive a 400 Bad Request error response.

// Request

// {
//   "title": "string",
//   "body": "string",
//   "tags": ["string"],
//   "media": {
//     "url": "https://url.com/image.jpg",
//     "alt": "string"
//   }
// }
