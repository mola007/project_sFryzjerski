import $ from 'jquery';

class ChangeOnScroll{

    constructor(){

    //nawigacja 
    this.siteNavList = $('.site-nav__list');
    this.siteNavLink = $('.site-nav__link');
    //our-staff cards
    this.staffCards = $('.our-staff__card');
    //offer blocks
    this.offerContainer = $('.offer');
    this.offerLeft = $('.offer__left');
    this.offerRight = $('.offer__right');
  
    this.addEvents();
  
    }

    addEvents(){
       $(window).on('scroll', this.elementsOnScroll.bind(this));
    }    

    elementsOnScroll(){
        let that = this,
        WindowTop = $(window).scrollTop();

        //change links color on scroll
        this.siteNavLink.each(function(){
            let sectionTop = $(this.hash).offset().top-20;
         
            if(sectionTop <= WindowTop){
                that.siteNavLink.removeClass('site-nav__link--active');
                $(this).addClass('site-nav__link--active');
            }
        })
        //sticky nav on scroll
        if( WindowTop <= this.siteNavList.offset().top/2){
            this.siteNavList.removeClass('site-nav__list--sticky-nav');
            this.siteNavLink.removeClass('site-nav__link--white'); 
            this.siteNavLink.addClass('site-nav__link--before-medium');       
        }else{
            this.siteNavList.addClass('site-nav__list--sticky-nav'); 
            this.siteNavLink.addClass('site-nav__link--white');
            this.siteNavLink.removeClass('site-nav__link--before-medium'); 
        } 
        //our staff - flip cards on scroll
        if(WindowTop >= this.staffCards.offset().top - $(window).height()/3)
        this.staffCards.addClass('our-staff__card--flip-card'); 
         //offer elements 
        if(WindowTop >= this.offerContainer.offset().top - $(window).height()/1.5){
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