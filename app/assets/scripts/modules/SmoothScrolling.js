import $ from 'jquery';

class SmoothScrolling{

 constructor(){
    this.navLink = $('.site-nav__link');
    this.scrollToSection();
 }

 scrollToSection(){
   let that = this;
  this.navLink.on('click', function(e) {
 
    if (this.hash !== "") { 
      e.preventDefault();

      let hash = this.hash;
  
      $('html, body').animate({ 
        scrollTop: $(hash).offset().top
      }, 600, function(){
        //window.location.hash = hash; 
      }); 
      } 
    })
  }
 }

export default SmoothScrolling;



