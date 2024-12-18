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

document.addEventListener('DOMContentLoaded', () => {
  const resSection = document.querySelector('.res-section');
  const personalDetailsSection = document.querySelector('.personal-details-section');
  const nextButton = document.querySelector('.next-button')
  const backButton = document.querySelector('.back-button')
  
  
   
   function validateForm() {
    let x = document.forms["res-form"]["date"].value;  
    let y = document.forms["res-form"]["time"].value;  
    let z = document.forms["res-form"]["party-size"].value;  
    
    
    if (x == "" || y == "" || z == "") {
      alert("All fields are required!");
      return false; 
    } else {
      return true; 
    }
  }

  
  nextButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    
   
    if (validateForm()) {
      resSection.style.display = 'none';  
      personalDetailsSection.style.display = 'flex';  
    }
  });
  
  backButton.addEventListener('click', () => {
    resSection.style.display = 'grid';
    personalDetailsSection.style.display = 'none';
  });
});