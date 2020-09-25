import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
export default function swiperInit() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 16,
        centeredSlides: true,
        breakpoints: {
         
          575: {
            slidesPerView: 1,
            spaceBetween: 8,
            
          },
          
          768: {
            slidesPerView: "auto",
            spaceBetween: 16,
            centeredSlides: true,
          },
        },
      
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

    });

}