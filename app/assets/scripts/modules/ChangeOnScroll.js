import $ from 'jquery';
import waypoints from 'waypoints/lib/noframework.waypoints'; 




class ChangeOnScroll{

    constructor(){
    //nawigacja 
    this.siteNavList = $('.site-nav__list');
    this.addEvents();
    //our-staff cards
    this.staffCards = $('.our-staff__card');
    //offer blocks
    this.offerContainer = $('.offer');
    this.offerLeft = $('.offer__left');
    this.offerRight = $('.offer__right');

    }

    addEvents(){
       //$(window).on('scroll', this.debounce(this.stickyNav).bind(this));
       $(window).on('scroll', this.debounce(this.flipCardsOnScroll).bind(this));
       $(window).on('scroll', this.debounce(this.revealOnScroll).bind(this));
    }

    debounce(func, wait = 20, immediate = true){
        let timeout;
        
        return function(){
           
            let context = this;
            let args = arguments;

            let later = function(){
           timeout = null;

            if(!immediate)func.apply(context, args);
            };

            let callNow = immediate && !timeout;

            clearTimeout(timeout);
            timeout = setTimeout(later, wait);

            if(callNow)func.apply(context, args);
        };

    };
     //co ma się stać z navigacją podczas skrolowana
    //  stickyNav(){   
    //     if($(window).scrollTop() >= this.siteNavList.offset().top)
    //     this.siteNavList.addClass('site-nav__list--sticky-nav');
    //     else
    //     this.siteNavList.removeClass('site-nav__list--sticky-nav');
    // } 
    //our staff - flip cards on scroll
    flipCardsOnScroll(){  
        if($(window).scrollTop() >= this.staffCards.offset().top - $(window).height()/3)
         this.staffCards.addClass('our-staff__card--flip-card');        
    }
    //offer elements 
    revealOnScroll(){
        if($(window).scrollTop() >= this.offerContainer.offset().top - $(window).height()/3){
            this.offerLeft.addClass('offer__left--show');
            this.offerRight.addClass('offer__right--show');
            this.flash();
        }  
    }
    flash(){
        this.offerLeft.on('transitionend', () => {
            this.offerContainer.addClass('offer--flash');
        });      
    }







   
}

export default ChangeOnScroll;