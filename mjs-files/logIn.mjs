// imported variables
import { baseApiUrl } from './common.mjs';
const logInEndPoint = '/auth/login';
const logInApi = `${baseApiUrl}${logInEndPoint}`;
// Log in user variables

const logInForm = document.querySelector('#log-in-form');
logInForm.addEventListener('submit', async e => {
  e.preventDefault();
  const logInUserName = document.querySelector('#email-input-log_in').value;
  const logInUserEmail = document.querySelector('#password-input').value;
  try {
    const response = await logInUser(logInUserName, logInUserEmail, logInApi);
    if (response.ok) {
      console.log('response:', response);
      alert('You are now logged in');
      logInForm.reset();
      window.location.href = '/post/edit.html';
    } else {
      console.log('response:', response);
      alert('Invalid username or password\nPlease try again');
    }
  } catch (error) {
    console.error(`Error :, ${error.message}`);
    return null;
  }

  await logInUser(logInUserName, logInUserEmail, logInApi);
  prompt('You are now logged in');
  logInForm.reset();
  window.location.href = '/post/edit.html';
});

const name = 'angzar49347@stud.noroff.no';
const pass = '/.,offThe12qw3p09/';

async function logInUser(email, password, api) {
  try {
    const res = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const responseData = await res.json();
    const accessToken = responseData.data.accessToken;
    localStorage.setItem('accessToken', accessToken);
    // console.log(responseData, accessToken);
    // console.log(accessToken);
    responseData.ok ? prompt('You are now logged in') : '';
    return responseData, accessToken;
  } catch (error) {
    console.error(`Error :, ${error.message}`);
    return null;
  }
}
// document.addEventListener('DOMContentLoaded', () => {});
