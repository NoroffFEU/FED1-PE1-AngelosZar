// collect data from intut
function collectUserInputs() {
  return {
    email: document.querySelector('#email-input-sign_up').value,
    password: document.querySelector('#password-input-sign_up').value,
    name: document.querySelector('#userNameInput').value,
  };
}
// test
const registerUrl2 = 'https://v2.api.noroff.dev/auth/register';
const signUpForm = document.querySelector('#signUpForm');
// user Inputs

// after a few issues i have tested again with the following api //
// api test platform
const reqtest = 'https://reqres.in/api/register';
const reqUser = {
  email: 'eve.holt@reqres.in',
  password: 'pistol',
};

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
    responseData.ok ? alert('Congratulation \nNew user was registered') : '';
    setTimeout((window.location.href = 'login.html'), 3500);
    return responseData;
  } catch (error) {
    alert('Error: \n' + responseData.errors[0].message);
    return null;
  }
}

signUpForm.addEventListener('submit', async e => {
  e.preventDefault();
  const user = collectUserInputs();
  registerUser(user, registerUrl2);
});
