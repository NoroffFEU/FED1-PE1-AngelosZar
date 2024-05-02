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

// Take later info from user input
let registeringUser = {
  name: 'my_username',
  email: 'first.last@stud.noroff.no',
  password: 'UzI1NiIsInR5cCI',
};

// api test platform
const reqtest = 'https://reqres.in/api/register';
const reqUser = {
  email: 'eve.holt@reqres.in',
  password: 'pistol',
};

async function registerUser(user, api) {
  try {
    // const response = await fetch.(`${baseApiUrl}${registerEndPoint}`);
    const res = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const responseData = await res.json();
    console.log(responseData);
    // prompt('Congratulation \nNew user was registered');
    return responseData;
  } catch (error) {
    console.error(`Error creating user:, ${error.message}`);
    return null; // You can handle errors differently based on your requirements
  }
}
//
// registerUser(reqUser, reqtest);
