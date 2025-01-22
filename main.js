
document.addEventListener("DOMContentLoaded", () => {
    // Carousel Logic
    const carouselImages = document.querySelectorAll(".carousel img");
    let currentIndex = 0;
  
    function showNextImage() {
      carouselImages[currentIndex].style.display = "none";
      currentIndex = (currentIndex + 1) % carouselImages.length;
      carouselImages[currentIndex].style.display = "block";
    }
  
    setInterval(showNextImage, 3000);
  
    // Form Submission Alert
    const contactForm = document.getElementById("contact-form");
  
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Thank you for contacting us! We will get back to you shortly.");
      contactForm.reset();
    });
  });
  

document.addEventListener("DOMContentLoaded", () => {
    // Carousel Logic
    const carouselImages = document.querySelectorAll(".carousel img");
    let currentIndex = 0;
  
    function showNextImage() {
      carouselImages[currentIndex].style.display = "none";
      currentIndex = (currentIndex + 1) % carouselImages.length;
      carouselImages[currentIndex].style.display = "block";
    }
  
    setInterval(showNextImage, 3000);
  
    // Form Submission Alert
    const contactForm = document.getElementById("contact-form");
  
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Thank you for contacting us! We will get back to you shortly.");
      contactForm.reset();
    });
  
    // Toggle Borders for All Elements
    const toggleButton = document.getElementById("toggle-borders");
  
    let bordersVisible = false;
  
    toggleButton.addEventListener("click", () => {
      const allElements = document.querySelectorAll("*"); // Select all elements
      bordersVisible = !bordersVisible;
  
      allElements.forEach((element) => {
        element.style.border = bordersVisible ? "1px solid red" : "none";
      });
    });
  });
  