import { baseApiUrl } from './common.mjs';
const registerEndPoint = '/auth/register';
const registerUrl = `${baseApiUrl}${registerEndPoint}`;
const registerUrl2 = 'https://v2.api.noroff.dev/auth/register';
//
// Sign up form variables
const inputUserEmail = document.querySelector('#email-input-sign_up').value;
const inputUserPassword = document.querySelector(
  '#password-input-sign_up'
).value;
const inputUserName = document.querySelector('#userNameInput').value;
const registerUserBtn = document.querySelector('#btn-sign-up');
const signUpForm = document.querySelector('#signUpForm');
// user Inputs
const registeringUser = {
  name: `${inputUserName}`,
  email: `${inputUserName}`,
  password: `${inputUserName}`,
};
const myCredentials = {
  name: 'angZar',
  email: 'angzar49347@stud.noroff.no',
  password: '/.,offThe12qw3p09/',
};
signUpForm.addEventListener('submit', async () => {
  e.preventDefault();
  console.log(inputUserEmail, inputUserName, inputUserPassword);
  registerUser(registeringUser, registerUrl2);
});

// registering user function
async function registerUser(user, api) {
  try {
    const res = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const responseData = await res.json();
    console.log(responseData);
    responseData.ok ? confirm('Congratulation \nNew user was registered') : '';
    return responseData;
  } catch (error) {
    console.error(`Error creating user:, ${error.message}`);
    alert(`Error creating user:, ${error.message}`);
  }
}

// registerUser(myCredentials, registerUrl2);
