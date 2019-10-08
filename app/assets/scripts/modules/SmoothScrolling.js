import $ from 'jquery';

class SmoothScrolling{

 constructor(){
    this.navLink = $('.site-nav__link');
    this.siteElement = $('.site-element');
    this.scrollToSection();
 }

 scrollToSection(){
   let that = this;
  this.navLink.on('click', function(e) {
 
    if (this.hash !== "") { 
      e.preventDefault();
     
      that.navLink.removeClass('site-nav__link--active');   
      $(this).addClass('site-nav__link--active');

      let hash = this.hash;
  
      $('html, body').animate({ 
        scrollTop: $(hash).offset().top
      }, 600, function(){
     
        //window.location.hash = hash; 
      });

      //
    
    } 
    })
  }

 }

export default SmoothScrolling;



