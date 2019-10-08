import $ from 'jquery';

class SmoothScrolling{

 constructor(){
    this.navLink = $('.site-nav__link');
    this.addEvents();
 }

 addEvents(){
  this.navLink.on('click', this.scrollOnClick)
}


  scrollOnClick(event){

    if (this.hash !== "") { 
      event.preventDefault();
      let hash = this.hash;
  
      $('html, body').animate({ 
        scrollTop: $(hash).offset().top 
      }, 800, function(){
        window.location.hash = hash; 
      });
    } 
  }
 }

export default SmoothScrolling;



