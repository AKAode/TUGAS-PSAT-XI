document.addEventListener('DOMContentLoaded', function() {
  // Slider functionality
  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider img');
  let currentIndex = 0;
  const intervalTime = 5000; // 5 seconds
  
  function slideImages() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    const translateValue = -currentIndex * 100 + '%';
    slider.style.transition = 'transform 1s ease-in-out';
    slider.style.transform = 'translateX(' + translateValue + ')';
  }
  
  // Start automatic sliding
  let intervalId = setInterval(slideImages, intervalTime);
  
  // Pause on hover
  slider.addEventListener('mouseenter', function() {
    clearInterval(intervalId);
  });
  
  // Resume on mouse leave
  slider.addEventListener('mouseleave', function() {
    intervalId = setInterval(slideImages, intervalTime);
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close sidebar if open
        const sidebar = document.querySelector('.sidebar');
        if (sidebar.style.left === '0px') {
          toggleSidebar();
        }
      }
    });
  });
  
  // Header scroll effect
  const header = document.querySelector('header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      header.style.boxShadow = 'none';
      header.style.transform = 'translateY(0)';
      return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scroll down
      header.style.transform = 'translateY(-100%)';
    } else {
      // Scroll up
      header.style.transform = 'translateY(0)';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
  });
  
  // Animation on scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.product-card, .testimonial-card, .instagram-post');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Set initial state for animated elements
  document.querySelectorAll('.product-card, .testimonial-card, .instagram-post').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Run once on load
  animateOnScroll();
  
  // Then run on scroll
  window.addEventListener('scroll', animateOnScroll);
});

// Toggle sidebar function
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar.style.left === '0px' || sidebar.style.left === '') {
    sidebar.style.left = '-250px';
  } else {
    sidebar.style.left = '0px';
  }
}
