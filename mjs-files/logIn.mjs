// imported variables
import { baseApiUrl } from './common.mjs';
// variables
const logInEndPoint = '/auth/login';
const logInApi = `${baseApiUrl}${logInEndPoint}`;
const logInForm = document.querySelector('#log-in-form');
// Log in page  -  log in user
document.addEventListener('DOMContentLoaded', () => {
  logInForm.addEventListener('submit', async e => {
    e.preventDefault();
    const logInUserName = document.querySelector('#email-input-log_in').value;
    const logInUserEmail = document.querySelector('#password-input').value;
    await logInUser(logInUserName, logInUserEmail, logInApi);
  });
});

async function logInUser(email, password, api) {
  try {
    const res = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      const responseData = await res.json();
      const accessToken = responseData.data.accessToken;
      const currentUser = responseData.data.name;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('name', responseData.data.name);
      confirm('You are now logged in');
      window.location.href = '/post/edit.html';
      return { responseData, accessToken, currentUser };
    } else {
      console.log('response:', response);
      alert('Invalid username or password\nPlease try again');
      logInForm.reset();
      window.location.href.reload();
      return false;
    }
  } catch (error) {
    alert('Something went wrong\nPlease try again');
    logInForm.reset();
    return false;
  }
}
