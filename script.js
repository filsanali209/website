document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function currentSlide(index){
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i == index);
    });
  }

  function nextSlide(){
    currentIndex = (currentIndex + 1) % slides.length;
    currentSlide(currentIndex);
  }
  currentSlide(currentIndex);
  

  setInterval(nextSlide, 3000);

});

window.onscroll = function() {headerTransition()};

function headerTransition() {
  const header = document.getElementById("transition-header");
if (document.documentElement.scrollTop > 0) {
  // Add "change" class for white background
  header.classList.add("change");
  header.classList.remove("index-header");
} else {
  // Add "index-header" class for transparent background
  header.classList.add("index-header");
  header.classList.remove("change");
}
}