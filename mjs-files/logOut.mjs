// log out function
document.addEventListener('DOMContentLoaded', () => {
  const logOut = document.querySelector('#log-out-btn2');
  logOut.addEventListener('click', e => {
    e.preventDefault();
    alert('You are now logged out');
    localStorage.removeItem('accessToken');
    window.location.href = '../index.html';
  });
});
