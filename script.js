const slides = document.querySelectorAll('.slide');
const slidesList = document.querySelector('.slides-list');
const slideTextbox = document.querySelector('.slide-textbox');
const sliderNavBtn = document.querySelectorAll('.slider-nav-btn');

let currentSlide = 0;

sliderNavBtn.forEach((control, index) => {
  control.addEventListener('click', (event) => {
    event.preventDefault();
    currentSlide = index;

    slidesList.style.transform = `translateX(-${currentSlide * 100}%)`;

    slideTextbox.style.transform = `translateX(-${currentSlide * 100}%)`;

    sliderNavBtn.forEach((btn, btnIndex) => {
      if (btnIndex === currentSlide) {
        btn.setAttribute('disabled', true);
      } else {
        btn.removeAttribute('disabled');
      }
    });
  });
});