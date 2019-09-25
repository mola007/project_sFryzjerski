import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; 


class RevealOnScroll{

    constructor(){
    //sicky Header + zmiana koloru nav
    this.siteNavList = $('.site-nav__list');
    this.createHeaderWaypoint();
    //podświetlenie linków
    this.siteElement = $('.site-element');
    this.navLink = $('.site-nav__link');
    this.createPageSectionWaypoints();
  

    }


createHeaderWaypoint(){
    let that = this;
    new Waypoint({
        element: this.siteNavList[0],
        handler: function(){
        that.siteNavList.toggleClass('site-nav__list--sticky-header');
        }
    })   
}

createPageSectionWaypoints(){
    let that = this;
  
    this.siteElement.each(function(){
    let currentSiteElement = this;
    new Waypoint({
    element: currentSiteElement,
    handler: function(direction){
    if(direction === "down"){
        let matchingHeaderLink = currentSiteElement.getAttribute('data-matching-link');
       
         // usuwanie koloru z linków
         that.navLink.removeClass('site-nav__link--gold');
        // dodawanie koloru do aktualnego linka */
         $(matchingHeaderLink).addClass('site-nav__link--gold');
         $(matchingHeaderLink).addClass('site-nav__link--gold');
    }
    
    },
    /* właściwość offset spowoduje że kolor linka zmieni się kiedy sekcja będzie 18% od góry */
    offset: "18%"
    });

    new Waypoint({
        element: currentSiteElement,
        handler: function(direction){
        if(direction === "up"){
            let matchingHeaderLink = currentSiteElement.getAttribute('data-matching-link');
           
             // usuwanie koloru z linków
             that.navLink.removeClass('site-nav__link--gold');
            // dodawanie koloru do aktualnego linka */
             $(matchingHeaderLink).addClass('site-nav__link--gold');
        }
        
        },
        /* właściwość offset spowoduje że kolor linka zmieni się kiedy sekcja będzie 18% od góry */
        offset: "-40%"
        });
    

    })
    }

}

export default RevealOnScroll;