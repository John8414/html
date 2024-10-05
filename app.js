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

// còn dùng nhưng do trang khác ko có header nên đóng nhó
// add search input //
// document.querySelector('.search-text').addEventListener('click', function() {
//   document.querySelector('.search-header').classList.add('clicked');
// });

$(document).ready(function() {

  $('.slick-slider').each(function() {
    $(this).slick({
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
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

  $('.prev-btn').on('click', function() {
    var targetSlider = $(this).data('slider-id');
    $('#' + targetSlider).slick('slickPrev');    
  });

  $('.next-btn').on('click', function() {
    var targetSlider = $(this).data('slider-id');
    $('#' + targetSlider).slick('slickNext');    
  });

});

// Product outlet

// tags
const tags = document.querySelectorAll('.tag');

tags.forEach(tag => {
  tag.addEventListener('click', () => {
    tag.classList.toggle('clicked');
  });
});


// reset clicked tags
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
  tags.forEach(tag => {
    tag.classList.remove('clicked');
  });
});

// toggle minus and plus

function toggleImage(button) {
  const img = button.querySelector('img');
    const plus = 'plus.svg';
    const minus = 'minus.svg';
    img.src = img.src.endsWith(plus) ? `images/${minus}` : `images/${plus}`;
}



	
//image picker
function changeImage(imageSrc) {
  document.getElementById("main-image").src = imageSrc;
  console.log(imageSrc);
}
