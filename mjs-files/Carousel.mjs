//
import { fetchData } from './common.mjs';
import { allArticles } from './common.mjs';
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const sliderBtnLeft = document.querySelector('.slider-btn-left');
const sliderBtnRight = document.querySelector('.slider-btn-right');
const dotContainer = document.querySelector('.dots');

let currentSlide = 0;
// use this variable for the api as well to keep slides at three
const maxSlideNum = slides.length;
// const maxSlideNum = 3;
//
// Move the slides to the left or right
const moveSlide = function (slide) {
  slides.forEach(
    (slide, index) =>
      (slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`)
  );
};
// move to the next slide
const nextSlide = function () {
  currentSlide === maxSlideNum - 1 ? (currentSlide = 0) : currentSlide++;
  moveSlide(currentSlide);
  syncDots(currentSlide);
};
// move to the previous slide
const prevSlide = function () {
  currentSlide === 0 ? (currentSlide = maxSlideNum - 1) : currentSlide--;
  moveSlide(currentSlide);
  syncDots(currentSlide);
};
// event listeners on the buttons
sliderBtnRight.addEventListener('click', nextSlide);
sliderBtnLeft.addEventListener('click', prevSlide);

// keyboard events fro slider
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});
// dynamically create the dots
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
// synchronize the dots with the slides
const syncDots = function (slide) {
  // remove active class from all dots
  document.querySelectorAll('.dots__dot').forEach(dot => {
    dot.classList.remove('dots__dot--active');
  });
  //   add active class to the current dot slide
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
// make dots clickable and move to the slide
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    moveSlide((currentSlide = slide));
    // moveSlide(slide);
    console.log('DOTS', e.target);
  }
});
//
// create slide with adjacent html
const createSlide = function (post) {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  // not sure if ts will accept this
  // slide.classList.add(`'slide--${post[i]}'`);
  slide.insertAdjacentHTML = `
<img src="${post.media.url}" alt="${post.media.alt}" class="slide__img" />
`;
  slider.appendChild(slide);
};
// fetch and populate the slides
const populateSlider = async function () {
  try {
    const { data: posts } = await fetchData(allArticles);
    console.log('Posts:', posts);
    for (let i = 0; i < 3; i++) {
      console.log(posts[i]);
      // createSlide(posts[i]);
      // createSlide(posts;
    }
  } catch (error) {
    console.error(error);
    console.log('Problem loading the content');
  }
  // moveSlide(0);
  // createDots();
  // clickedPost();
  // clickedPost(posts[i]);
};
//
const initCarousel = function () {
  moveSlide(0);
  createDots();
  syncDots(0);
};
initCarousel();
populateSlider();
