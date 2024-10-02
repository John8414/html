// Scale zoom in image //
const imageContainers = document.querySelectorAll('.img-scale');

imageContainers.forEach((imageContainer) => {
  const img = imageContainer.querySelector('img');
  
  const handleMouseMove = (e) => {
    const rect = imageContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    
    img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
  };
  
  const handleMouseLeave = () => {
    img.style.transformOrigin = 'center center';
  };
  
  imageContainer.addEventListener('mousemove', handleMouseMove);
  imageContainer.addEventListener('mouseleave', handleMouseLeave);
  
  const removeZoomEffect = () => {
    imageContainer.removeEventListener('mousemove', handleMouseMove);
    imageContainer.removeEventListener('mouseleave', handleMouseLeave);
  };
  
});
// Scale zoom in image //


// add search input //
document.querySelector('.search-text').addEventListener('click', function() {
  document.querySelector('.search-header').classList.add('active');
});

// slick //
$(document).ready(function(){
  $('.product-slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.prev-btn'), // Custom previous button
    nextArrow: $('.next-btn'), // Custom next button
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});