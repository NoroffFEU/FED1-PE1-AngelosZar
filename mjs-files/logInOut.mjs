// Imported functions
import { fetchData } from './common.mjs';
// imported variables
import { baseApiUrl } from './common.mjs';

const registerEndPoint = '/auth/register';
const registerUrl = `${baseApiUrl}${registerEndPoint}`;
// Log in user variables
const logInUserName = document.querySelector('#email-input-log_in').value;
const logInUserEmail = document.querySelector('#password-input').value;
const logInBtn = document.querySelector('#btn-log-in');
logInBtn.addEventListener('click', () => {
  preventDefault();
  console.log(logInUserName, logInUserEmail);
});
