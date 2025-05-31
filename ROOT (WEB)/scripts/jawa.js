document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider img');
    let currentIndex = 0;
    const intervalTime = 3000; // Waktu setiap gambar (dalam milidetik)
  
    function slideImages() {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      const translateValue = -currentIndex * 100 + '%';
      slider.style.transform = 'translateX(' + translateValue + ')';
    }
  
    let intervalId = setInterval(slideImages, intervalTime);
  
    // Optional: Hentikan interval saat mouse memasuki slider
    slider.addEventListener('mouseenter', function() {
      clearInterval(intervalId);
    });
  
    // Optional: Mulai kembali interval saat mouse keluar dari slider
    slider.addEventListener('mouseleave', function() {
      intervalId = setInterval(slideImages, intervalTime);
    });
  });
  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-200px'; // Sembunyikan sidebar
    } else {
        sidebar.style.left = '0px'; // Tampilkan sidebar
    }
}