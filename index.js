const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider__item');
const wrap = document.querySelector('.wrap');
const dots = document.querySelectorAll('.dot');
const dotsWrap = document.querySelector('.slider__dots');
const prev = document.querySelector('.arrow__left');
const next = document.querySelector('.arrow__right');
// Текущий слайд
let currentSlide = 1;

// Функция показа слайда, передаем сюда номер текущего слайда(currentSlide).
showSlides(currentSlide);
// Интервал для автоматического переключения слайда каждые 3 секунды.
let autoSlide = setInterval(() => nextSlide(1), 3000);
function showSlides(number) {
    // Если перелистываем последний слайд, то переходим к первому.
    if (number > slides.length) {
        currentSlide = 1;
    }
    // Если перелистываем первый слайд назад, то переходим на последний.
    if (number < 1) {
        currentSlide = slides.length;
    }
    // Скрываем все слайды.
    slides.forEach(slide => slide.style.display = 'none');
    // Удаляем активный класс у всех точек.
    dots.forEach(dot => dot.classList.remove('dot-active'));
    // Показываем нужный слайд.
    slides[currentSlide - 1].style.display = 'block';
    // Добавляем нужной точке активный класс.
    dots[currentSlide - 1].classList.add('dot-active');
}
// Листаем следующий слайд.
function nextSlide(index) {
    showSlides(currentSlide += index);
}
// Показываем текущий слайд.
function showCurrentSlide(index) {
    showSlides(currentSlide = index);
}
// Обработчик события стрелки вперед.
prev.addEventListener('click', () => {
    // Обнуляем и перезапускаем интервал, чтобы избежать проблем с преждевременной сменой слайда.
    clearInterval(autoSlide);
    nextSlide(-1);
    autoSlide = setInterval(() => nextSlide(1), 3000);
});
// Обработчик события стрелки назад.
next.addEventListener('click', () => {
    clearInterval(autoSlide);
    nextSlide(1);
    autoSlide = setInterval(() => nextSlide(1), 3000);
});
// Обработчик события для точек.
dotsWrap.addEventListener('click', event => {
    for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
            clearInterval(autoSlide);
            showCurrentSlide(i);
            autoSlide = setInterval(() => nextSlide(1), 3000);
        }
    }
});
