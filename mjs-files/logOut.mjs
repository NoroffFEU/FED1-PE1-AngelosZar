// log out function
const token = localStorage.getItem('accessToken');
export const logOut = function () {
  const logOutBtn = document.querySelector('#log-out-btn2');
  logOutBtn.addEventListener('click', e => {
    e.preventDefault();
    if (token) {
      alert('You are now logged out');
      sessionStorage.clear();
      localStorage.clear();
      window.location.href = '/index.html';
    } else {
      sessionStorage.clear();
      localStorage.clear();
      alert('Ops something went wrong');
    }
  });
};
document.addEventListener('DOMContentLoaded', logOut);
