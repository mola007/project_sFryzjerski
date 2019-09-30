import $ from 'jquery';

import 'owl.carousel/dist/owl.carousel.min.js';

class OwlSlider{

    constructor(){  
      
  
        $('.owl-carousel').owlCarousel({
            center: true,
            
            loop:true,
            stagePadding: 50,
            slideBy:2,
           

            margin:50,
            nav:true,
            autoplayHoverPause:true,
            autoplay:true,
            autoplayTimeout:3000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })
    
    }

    // imgWrapperPosition(){
    //     this.slide.css('transform', 'translateX('+(-this.size*this.counter) + 'px)');
    // }

    // nextSlide(){
    //     let that = this;
    //     this.next.click(function(e){
    //         e.preventDefault();

    //         that.counter++;
    //         if(that.counter >= that.imgWrapper.length) {
    //         that.counter = 0;   
    //         };
            
    //         that.imgWrapperPosition();
    //     })
    // }

    // previousSlide(){
    //     let that = this;
    //     this.prev.click(function(e){
    //         e.preventDefault();
    //         that.counter--;
    //         if(that.counter < 0){
    //             that.counter =  that.imgWrapper.length - 1; 
    //         } 
    //         that.imgWrapperPosition();
    //     })
    // }

    // resumeSlide(){
    //  let that = this;
    
    //  this.slide.on('transitionend', function(){
         
    //      if(that.imgWrapper.eq(that.counter).hasClass('gallery-slider__item--last-clone')){
    //          that.slide.css('transition', 'none');
    //          that.counter = that.imgWrapper.length - 2;
    //          that.imgWrapperPosition();      
    //      }

    //      if(that.imgWrapper.eq(that.counter).hasClass('gallery-slider__item--first-clone')){
    //          that.counter = that.imgWrapper.length - that.counter;
    //      that.imgWrapperPosition();
    //      }
    //  })
    // }

    



 
      


 
}

export default OwlSlider;