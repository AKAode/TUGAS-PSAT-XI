document.addEventListener('DOMContentLoaded', function() {
  // Filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const menuItems = document.querySelectorAll('.menu-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;

      // Filter items
      menuItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      // Smooth scroll to first visible section
      document.querySelector('.menu-sections').scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Cart functionality
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartCount = document.querySelector('.cart-count');
  let count = 0;

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const itemName = this.closest('.item-details').querySelector('h3').textContent;
      
      // Visual feedback
      this.textContent = 'Added!';
      this.style.backgroundColor = '#25D366';
      
      // Update cart count
      count++;
      cartCount.textContent = count;
      cartCount.classList.add('pulse');
      
      setTimeout(() => {
        this.textContent = 'Add +';
        this.style.backgroundColor = '#a86b44';
        cartCount.classList.remove('pulse');
      }, 1500);
      
      console.log(`Added ${itemName} to cart`);
    });
  });

  // Brewing guide button
  const guideBtn = document.querySelector('.guide-btn');
  guideBtn.addEventListener('click', () => {
    alert("This would launch a coffee preference quiz in a real implementation!");
  });
});