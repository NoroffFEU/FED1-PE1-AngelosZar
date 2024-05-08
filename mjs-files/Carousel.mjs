//
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const sliderBtnLeft = document.querySelector('.slider-btn-left');
const sliderBtnRight = document.querySelector('.slider-btn-right');
const dotContainer = document.querySelector('.dots');

let currentSlide = 0;
// use this variable for the api as well to keep slides at three
const maxSlideNum = slides.length;
//
const moveSlide = function (slide) {
  slides.forEach(
    (slide, index) =>
      (slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`)
  );
};
const nextSlide = function () {
  currentSlide === maxSlideNum - 1 ? (currentSlide = 0) : currentSlide++;
  moveSlide(currentSlide);
  syncDots(currentSlide);
};
const prevSlide = function () {
  currentSlide === 0 ? (currentSlide = maxSlideNum - 1) : currentSlide--;
  moveSlide(currentSlide);
  syncDots(currentSlide);
};
sliderBtnRight.addEventListener('click', nextSlide);
sliderBtnLeft.addEventListener('click', prevSlide);

// keyboard events fro slider
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
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
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    moveSlide((currentSlide = slide));
    // moveSlide(slide);
    console.log('DOTS', e.target);
  }
});

const initCarousel = function () {
  moveSlide(0);
  createDots();
  syncDots(0);
};
initCarousel();
