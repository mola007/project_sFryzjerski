import $ from 'jquery';

class MobileMenu{
    constructor(){
        this.siteNavContent = $('.site-nav__content');
        this.menuIcon = $('.site-nav__menu-icon');

       
        this.events();
        
    }

events(){
   this.menuIcon.click(this.toggleTheMenu.bind(this));
}

toggleTheMenu(){
     this.siteNavContent.toggleClass('site-nav__content--is-visible');
     this.menuIcon.toggleClass('site-nav__menu-icon--open')


}
}


export default MobileMenu;