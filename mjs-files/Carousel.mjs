//
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const sliderBtnLeft = document.querySelector('.slider-btn-left');
const sliderBtnRight = document.querySelector('.slider-btn-right');
const dotContainer = document.querySelector('.dots');
// slider.style.transform = 'scale(0.2)';
// slider.style.overflow = 'visible';

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

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    moveSlide((currentSlide = slide));
    console.log('DOTS', e.target);
  }
});
moveSlide(0);
createDots();
