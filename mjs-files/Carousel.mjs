//
import { fetchData } from './common.mjs';
import { allArticles } from './common.mjs';
import { clickedPost } from './homepage.mjs';
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const sliderBtnLeft = document.querySelector('.slider-btn-left');
const sliderBtnRight = document.querySelector('.slider-btn-right');
const dotContainer = document.querySelector('.dots');
let currentSlide = 0;
const maxSlideNum = 3;
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
// use getboundingClientRect to get this command to run only when carousel is on viewport
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

// innerHTML;
const populateSlider = async function () {
  try {
    const { data: posts } = await fetchData(allArticles);
    slides.innerHTML = '';
    for (let i = 0; i < maxSlideNum; i++) {
      const slides = document.querySelector('.slide');
      slides.classList.add('slide');
      slides.innerHTML = `<img src="${posts[i].media.url}" alt="${posts[i].media.alt}" /> 
      <div class="slider-title">
      <h2>${posts[i].title}</h2>
      <p class="card-author">${posts[i].author.name}</p>
    </div>`;
      slider.appendChild(slides);
      slides.addEventListener('click', function (e) {
        e.preventDefault;
        console.log('click');
        clickedPost(posts[i]);
      });
    }
    moveSlide(currentSlide);
    syncDots(currentSlide);
  } catch (error) {
    console.error(error);
  }
};
//
const initCarousel = function () {
  moveSlide(0);
  createDots();
  syncDots(0);
};
initCarousel();
populateSlider();
