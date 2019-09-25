import $ from 'jquery';

class SmoothScrolling{

 constructor(){
    this.navLink = $('.site-nav__link');
    this.ScrollOnClick();
 }

 ScrollOnClick(){
    
   
    this.navLink.on('click', function(event){

          event.preventDefault();
          let linkId = this.id;


        $('html, body').animate({ 
          scrollTop: $('.'+linkId).offset().top
          }, 500);         
      
      }) 
  }
}

export default SmoothScrolling;



