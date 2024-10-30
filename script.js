let currentIndex = 0;

function showNextImage() {
    const slides = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");
    currentIndex = (currentIndex + 1) % images.length;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextImage, 5000);
