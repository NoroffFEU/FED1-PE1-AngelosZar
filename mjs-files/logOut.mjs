// log out function
const token = localStorage.getItem('accessToken');
export const logOut = function () {
  const logOutBtn = document.querySelector('#log-out-btn2');
  logOutBtn.addEventListener('click', e => {
    e.preventDefault();
    // logOut();
  });
  if (token) {
    alert('You are now logged out');
    localStorage.removeItem('accessToken');
    window.location.href = 'index.html';
    // /Users/angeloszaros/Documents/GitHub/FED1-PE1-AngelosZar/post/index.html
    // /Users/angeloszaros/Documents/GitHub/FED1-PE1-AngelosZar/index.html
    alert('You are not logged in');
  }
};
