import $ from 'jquery';
import 'owl.carousel/dist/owl.carousel.min.js';

class OwlSlider{

    constructor(){  
      
        $('.owl-carousel').owlCarousel({
            center: true,      
            loop:true,
            stagePadding: 50,
            slideBy:1,
            margin:50,
            nav:false,
            autoplayHoverPause:true,
            autoplay:true,
            autoplayTimeout:3000,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:3
                },
                1300:{
                    items:5
                }
            }
        })
    
    }
}

export default OwlSlider;