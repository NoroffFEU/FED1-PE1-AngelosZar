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
    window.location.href = 'index.html';
  } else {
    alert('You are not logged in');
  }
};
