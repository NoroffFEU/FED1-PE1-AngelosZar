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
  //   e.stopPropagation()
  console.log(inputUserEmail, inputUserName, inputUserPassword);
  registerUser(registeringUser, registerUrl2);
});

// api test platform
const reqtest = 'https://reqres.in/api/register';
const reqUser = {
  email: 'eve.holt@reqres.in',
  password: 'pistol',
  //   email: 'inputUserEmail.value',
  //   password: 'inputUserPassword.value',
  //   name: 'inputUserName.value',
};

// registering user function
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
    responseData.ok ? prompt('Congratulation \nNew user was registered') : '';

    return responseData;
  } catch (error) {
    console.error(`Error creating user:, ${error.message}`);
    return null;
  }
}

// registerUser(myCredentials, registerUrl2);
