//
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const sliderBtnLeft = document.querySelector('.slider-btn-left');
const sliderBtnRight = document.querySelector('.slider-btn-right');

// slider.style.transform = 'scale(0.2)';
// slider.style.overflow = 'visible';

slides.forEach(
  (slide, index) => (slide.style.transform = `translateX(${index * 100}%)`)
);
// slides
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
};
const prevSlide = function () {
  currentSlide === 0 ? (currentSlide = maxSlideNum - 1) : currentSlide--;
  moveSlide(currentSlide);
};
sliderBtnRight.addEventListener('click', nextSlide);
sliderBtnLeft.addEventListener('click', prevSlide);
