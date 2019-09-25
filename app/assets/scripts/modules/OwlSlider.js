import $ from 'jquery';

class OwlSlider{

    constructor(){    
        this.slide = $('.gallery-slider__list ');
        this.imgWrapper = $('.gallery-slider__item');
       
        this.next = $('.gallery-slider__next');
        this.prev = $('.gallery-slider__prev');
        this.counter = 1;
        this.size = this.imgWrapper.outerWidth();
        this.imgWrapperPosition();
        this.nextSlide();
        this.previousSlide();
        this.resumeSlide();
    
    }

    imgWrapperPosition(){
        this.slide.css('transform', 'translateX('+(-this.size*this.counter) + 'px)');
    }

    nextSlide(){
        let that = this;
        this.next.click(function(e){
            e.preventDefault();
            if(that.counter >= that.imgWrapper.length - 1)return;

            that.slide.css('transition', 'all .4s ease-in-out');
            that.counter++;
            that.imgWrapperPosition();
        })
    }

    previousSlide(){
        let that = this;
        this.prev.click(function(e){
            e.preventDefault();
            if(that.counter <= 0)return;

            that.slide.css('transition', 'all .4s ease-in-out');
            that.counter--;
            that.imgWrapperPosition();
        })
    }

    resumeSlide(){
     let that = this;
    
     this.slide.on('transitionend', function(){
         
         if(that.imgWrapper.eq(that.counter).hasClass('gallery-slider__item--last-clone')){
             that.slide.css('transition', 'none');
             that.counter = that.imgWrapper.length - 2;
             that.imgWrapperPosition();      
         }

         if(that.imgWrapper.eq(that.counter).hasClass('gallery-slider__item--first-clone')){
             that.counter = that.imgWrapper.length - that.counter;
         that.imgWrapperPosition();
         }
     })
    }

    



 
      


 
}

export default OwlSlider;