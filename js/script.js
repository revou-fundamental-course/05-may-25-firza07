// Navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});

// Banner slider functionality
const slides = [
  {
    image: 'https://storage.googleapis.com/a1aa/image/681ad248-9fd3-43be-e59c-dbe0b3ac40e9.jpg',
    title: 'Liburan Impian ke Bali',
    description: 'Nikmati keindahan pantai dan budaya yang memukau bersama paket wisata kami.'
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/b095ac3f-539f-4f9a-5041-f27d33038a14.jpg',
    title: 'Petualangan Gunung Rinjani',
    description: 'Jelajahi keindahan alam Lombok dengan trekking ke Gunung Rinjani yang menakjubkan.'
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/aa6649d6-5d8e-4518-a2be-801e1782b508.jpg',
    title: 'Tur Budaya Yogyakarta',
    description: 'Nikmati wisata budaya dan sejarah di Yogyakarta, termasuk Candi Prambanan dan Keraton.'
  }
];

let currentSlide = 0;
const slideImage = document.getElementById('slide-image');
const slideTitle = document.getElementById('slide-title');
const slideDesc = document.getElementById('slide-desc');

function showSlide(index) {
  slideImage.style.opacity = 0;
  setTimeout(() => {
    slideImage.src = slides[index].image;
    slideTitle.textContent = slides[index].title;
    slideDesc.textContent = slides[index].description;
    slideImage.style.opacity = 1;
  }, 500);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto slide change every 5 seconds
setInterval(nextSlide, 5000);

// Form validation
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const destinationSelect = document.getElementById('destination');
const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const errorDestination = document.getElementById('error-destination');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === '' || nameInput.value.trim().length < 3) {
    errorName.classList.remove('hidden');
    isValid = false;
  } else {
    errorName.classList.add('hidden');
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    errorEmail.classList.remove('hidden');
    isValid = false;
  } else {
    errorEmail.classList.add('hidden');
  }

  // Destination validation
  if (destinationSelect.value === '') {
    errorDestination.classList.remove('hidden');
    isValid = false;
  } else {
    errorDestination.classList.add('hidden');
  }

  // If form is valid
  if (isValid) {
    // Here you would typically send the form data to a server
    formSuccess.classList.remove('hidden');
    contactForm.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      formSuccess.classList.add('hidden');
    }, 5000);
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    navMenu.classList.add('hidden');
  });
});