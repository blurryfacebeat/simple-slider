const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider__item');
const wrap = document.querySelector('.wrap');
const dots = document.querySelectorAll('.dot');
const dotsWrap = document.querySelector('.slider__dots');
const prev = document.querySelector('.arrow__left');
const next = document.querySelector('.arrow__right');
let currentSlide = 1;

// Функция показа слайда, передаем сюда номер текущего слайда(currentSlide);
showSlides(currentSlide);
let autoSlide = setInterval(() => nextSlide(1), 3000);
function showSlides(number) {
    if (number > slides.length) {
        currentSlide = 1;
    }
    if (number < 1) {
        currentSlide = slides.length;
    }

    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('dot-active'));

    slides[currentSlide - 1].style.display = 'block';
    dots[currentSlide - 1].classList.add('dot-active');
}

function nextSlide(index) {
    showSlides(currentSlide += index);
}

function showCurrentSlide(index) {
    showSlides(currentSlide = index);
}

prev.addEventListener('click', () => {
    clearInterval(autoSlide);
    nextSlide(-1);
    autoSlide = setInterval(() => nextSlide(1), 3000);
});

next.addEventListener('click', () => {
    clearInterval(autoSlide);
    nextSlide(1);
    autoSlide = setInterval(() => nextSlide(1), 3000);
});

dotsWrap.addEventListener('click', event => {
    for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
            clearInterval(autoSlide);
            showCurrentSlide(i);
            autoSlide = setInterval(() => nextSlide(1), 3000);
        }
    }
});