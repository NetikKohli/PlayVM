let index = 0;
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function autoSlide() {
  index = (index + 1) % totalImages; // Cycle to the next image, loop back to start after the last image
  updateCarousel();
}

function updateCarousel() {
  const translateXValue = -index * 100;
  carousel.style.transform = `translateX(${translateXValue}%)`;
}

// Start the auto-slide with a 3-second interval
setInterval(autoSlide, 3000);
