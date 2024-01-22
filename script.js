const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var fixedImageAnimation = () => {
    var fixedImage = document.querySelector('.fixed-img');
    var elementContainer = document.querySelector('.element-container');
    
    elementContainer.addEventListener('mouseenter', () => {
        fixedImage.style.display = 'inherit'
    })
    elementContainer.addEventListener('mouseleave', () => {
        fixedImage.style.display = 'none'
    })
    
    var elementsArray = document.querySelectorAll('.element')
    elementsArray.forEach((event) => {
        event.addEventListener('mouseenter', () => {
            var dataImage = event.getAttribute('data-image');
            fixedImage.style.backgroundImage = `url(${dataImage})`
        })
    })
}

// SwiperJs Code
var swiperAnimation = () => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

fixedImageAnimation();
swiperAnimation();
