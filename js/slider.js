const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const radioButtons = document.querySelectorAll('input[type="radio"]');
const sliderContent = document.querySelector(".slider-content");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

// Thay đổi slide khi nhấp vào radio button
radioButtons.forEach(function (radio, index) {
  radio.addEventListener("change", function (e) {
    console.log(e.target);
    currentSlide = index;
    sliderContent.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
});



function updateSlider() {
    radioButtons[currentSlide].checked = true;
    sliderContent.style.transform = `translateX(-${currentSlide * 100}%)`;
}
// Xử lý sự kiện click nút "prev"
prevButton.addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
});

// Xử lý sự kiện click nút "next"
nextButton.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
});













































