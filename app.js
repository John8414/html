const imageContainer = document.querySelector('.img-scale');
const img = imageContainer.querySelector('img');

imageContainer.addEventListener('mousemove', (e) => {
  const rect = imageContainer.getBoundingClientRect();
  const x = e.clientX - rect.left; 
  const y = e.clientY - rect.top; 
  
  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
});

imageContainer.addEventListener('mouseleave', () => {
  img.style.transformOrigin = 'center center'; 
});


document.querySelector('.search-text').addEventListener('click', function() {
  document.querySelector('.search-header').classList.add('active');
});
