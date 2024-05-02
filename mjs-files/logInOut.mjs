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
  console.log(logInUserName, logInUserEmail);
});

//
//
//
// const axios = require('axios');
//

async function registerUser(RegisteringUser) {
  //   const axios = require('axios');
  try {
    const response = await axios.post(
      `${baseApiUrl}${registerEndPoint}`,
      RegisteringUser
    );
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    return null; // You can handle errors differently based on your requirements
  }
}
//
// Take later info from user input
let RegisteringUser = {
  name: 'my_username',
  email: 'first.last@stud.noroff.no',
  password: 'UzI1NiIsInR5cCI',
};
registerUser(RegisteringUser);
console.log('efwefw');
