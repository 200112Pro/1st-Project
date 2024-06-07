let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    loop:true,
    grabCursor:true,
    freeMode: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",

      },

      

      breakpoints:{
        0:{
            slidesPerView: 1,
            
        },
        650:{
            slidesPerView: 2,
            
        },
        1150:{
            slidesPerView: 3,
            
        },
      }
  });

