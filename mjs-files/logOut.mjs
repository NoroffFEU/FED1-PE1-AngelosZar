// log out function
export const logOut = function () {
  const logOutBtn = document.querySelector('#log-out-btn2');
  logOutBtn.addEventListener('click', e => {
    e.preventDefault();
    logOut();
  });
  alert('You are now logged out');
  localStorage.removeItem('accessToken');
  window.location.href = '../index.html';
};
// logOut();
