// imported variables
import { baseApiUrl } from './common.mjs';
const logInEndPoint = '/auth/login';
const logInApi = `${baseApiUrl}${logInEndPoint}`;
// Log in page  -  log in user
document.addEventListener('DOMContentLoaded', () => {
  const logInForm = document.querySelector('#log-in-form');
  logInForm.addEventListener('submit', async e => {
    e.preventDefault();
    const logInUserName = document.querySelector('#email-input-log_in').value;
    const logInUserEmail = document.querySelector('#password-input').value;
    await logInUser(logInUserName, logInUserEmail, logInApi);
    confirm('You are now logged in');
    logInForm.reset();
    window.location.href = '/post/edit.html';
  });
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
    if (res.ok) {
      const responseData = await res.json();
      const accessToken = responseData.data.accessToken;
      // const currentUser = responseData.data.name;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('name', responseData.data.name);
      // console.log(responseData);
      // console.log(responseData.data.name);
      // console.log(accessToken);
      responseData.ok ? alert('You are now logged in') : '';
      return { responseData, accessToken, name };
    } else {
      console.log('response:', response);
      alert('Invalid username or password\nPlease try again');
    }
  } catch (error) {
    alert('Something went wrong\nPlease try again');
    return null;
  }
}
// logInUser(name, pass, logInApi);
