// log out function
const token = localStorage.getItem('accessToken');
export const logOut = function () {
  const logOutBtn = document.querySelector('#log-out-btn2');
  logOutBtn.addEventListener('click', e => {
    e.preventDefault();
  });
  if (token) {
    alert('You are now logged out');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('name');
    // window.location.href = '../index.html';
    // window.location.href = '/login.html';
    window.location.reload();
  } else {
    alert('You are not logged in');
  }
};
