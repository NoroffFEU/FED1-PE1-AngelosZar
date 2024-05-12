const token = localStorage.getItem('accessToken');
import { allArticles } from './common.mjs';
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

const dataTest = {
  title: 'Biometric Authentication',
  body: 'Enhancing Security and Convenience Biometric authentication technologies, such as fingerprint recognition, facial recognition, and iris scanning, offer a secure and convenient way to verify individuals identities.From unlocking smartphones and accessing bank accounts to boarding flights and entering secure facilities, biometrics are increasingly replacing traditional authentication methods like passwords and PINs.One of the key benefits of biometric authentication is its ability to provide stronger security compared to traditional authentication methods. Biometric identifiers, such as fingerprints and facial features, are unique to each individual and difficult to replicate, making them highly secure for identity verification purposes.This reduces the risk of unauthorized access and identity theft, enhancing security for both individuals and organizations. Additionally, biometric authentication offers greater convenience and ease of use compared to traditional authentication methods. With biometrics, users can access their devices, accounts, and services quickly and securely without the need to remember complex passwords or carry physical tokens.This improves user experience and reduces friction in the authentication process, leading to higher adoption rates and user satisfaction. Moreover, biometric authentication can improve accessibility for individuals with disabilities or impairments. Unlike traditional authentication methods that may require manual input or physical interaction, biometrics enable seamless and non-invasive identity verification using biometric characteristics that are inherent to the individual.',
  tags: ['dev'],
  media: {
    url: 'https://images.unsplash.com/photo-1585079374502-415f8516dcc3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'fingerprint',
  },
};

// createNewPost(dataTest, allArticles, token);
